const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

const app = express();

app.use(cors());
app.use(express.json());

// --- Configuration ---
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

function getDataDir() {
  const paths = [
    path.join(__dirname, 'data'),
    path.join(process.cwd(), 'data'),
    path.join(process.cwd(), '..', 'data'),
    'D:\\antigravity\\app\\English word\\data'
  ];
  const cleanPaths = paths.filter(p => !p.includes('Temp') && !p.includes('asar') && !p.includes('app.asar'));
  for (const p of cleanPaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  for (const p of [paths[1], paths[2], paths[3]]) {
    try {
      if (!fs.existsSync(p)) {
        fs.mkdirSync(p, { recursive: true });
      }
      return p;
    } catch (e) {}
  }
  return paths[0];
}

const DATA_DIR = getDataDir();
const KIDS_LIST_FILE = path.join(DATA_DIR, 'kids_list.json');
const CONFIG_FILE = path.join(DATA_DIR, 'config.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure kids_list.json exists
if (!fs.existsSync(KIDS_LIST_FILE)) {
  fs.writeFileSync(KIDS_LIST_FILE, JSON.stringify({ kids: ['默认小朋友'], active: '默认小朋友' }, null, 2), 'utf8');
}

// --- Helper Functions ---
function getKidFilePath(kidName) {
  // Sanitize filename to prevent directory traversal
  const safeName = kidName.replace(/[^\w\s\u4e00-\u9fa5.-]/gi, '_').trim();
  return path.join(DATA_DIR, `${safeName || 'default'}.json`);
}

function readJsonFile(filePath, defaultValue = {}) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (e) {
    console.error(`Error reading file ${filePath}:`, e);
  }
  return defaultValue;
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    console.error(`Error writing file ${filePath}:`, e);
    return false;
  }
}

function readConfig() {
  return readJsonFile(CONFIG_FILE, { pdfPath: '' });
}

function writeConfig(config) {
  return writeJsonFile(CONFIG_FILE, config);
}

function getPdfDir() {
  // 1. Check custom path from config
  try {
    const config = readConfig();
    if (config.pdfPath && fs.existsSync(config.pdfPath)) {
      return config.pdfPath;
    }
  } catch (e) {}

  // 2. Fallbacks
  const paths = [
    path.join(__dirname, '译林版小学英语【电子课本】'),
    path.join(process.cwd(), '译林版小学英语【电子课本】'),
    path.join(process.cwd(), '..', '译林版小学英语【电子课本】'),
    'D:\\antigravity\\app\\English word\\译林版小学英语【电子课本】'
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return paths[0];
}

// Get the local IPv4 address for LAN access info, prioritizing physical adapters and filtering virtual ones
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  let fallbackIP = '127.0.0.1';
  
  // Sort interface names to prioritize physical-like interfaces (WLAN, Wi-Fi, Ethernet, 以太网)
  const keys = Object.keys(interfaces).sort((a, b) => {
    const isPhysical = (name) => /wi-fi|wlan|ethernet|以太网|无线|en[0-9]|eth[0-9]/i.test(name);
    const aPhys = isPhysical(a);
    const bPhys = isPhysical(b);
    if (aPhys && !bPhys) return -1;
    if (!aPhys && bPhys) return 1;
    return a.localeCompare(b);
  });

  for (const name of keys) {
    // Skip virtual adapters to prevent incorrect IP addresses in WSL/Docker/VirtualBox environments
    if (/virtual|vbox|vmware|docker|wsl|vEthernet|vpn|tunnel|loopback|isatap/i.test(name)) {
      continue;
    }
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        // Only return link-local as ultimate fallback
        if (iface.address.startsWith('169.254.')) {
          if (fallbackIP === '127.0.0.1') fallbackIP = iface.address;
          continue;
        }
        return iface.address;
      }
    }
  }
  
  // Ultimate fallback: return any non-internal IPv4
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  
  return fallbackIP;
}

// --- Mock api.php Routes ---
// Map GET /api.php and POST /api.php to emulate the NAS backend behavior
app.all('/api.php', (req, res) => {
  const action = req.query.action || '';
  
  if (req.method === 'GET') {
    if (action === 'list') {
      const data = readJsonFile(KIDS_LIST_FILE, { kids: ['默认小朋友'], active: '默认小朋友' });
      data.lanIP = getLocalIP();
      data.port = req.socket.localPort || DEFAULT_PORT;
      return res.json(data);
    } 
    
    if (action === 'load') {
      const kid = (req.query.kid || '').trim();
      if (!kid) return res.status(400).json({ error: 'Missing kid parameter' });
      const data = readJsonFile(getKidFilePath(kid), { progress: {}, bookmarks: [] });
      return res.json(data);
    }
  }
  
  if (req.method === 'POST') {
    const body = req.body || {};
    
    if (action === 'setActive') {
      const kid = (body.kid || '').trim();
      if (!kid) return res.status(400).json({ error: 'Missing kid parameter' });
      
      const listData = readJsonFile(KIDS_LIST_FILE, { kids: ['默认小朋友'], active: '默认小朋友' });
      if (listData.kids.includes(kid)) {
        listData.active = kid;
        writeJsonFile(KIDS_LIST_FILE, listData);
      }
      return res.json({ success: true });
    }
    
    if (action === 'addKid') {
      const kid = (body.kid || '').trim();
      if (!kid) return res.status(400).json({ error: 'Missing kid parameter' });
      
      const listData = readJsonFile(KIDS_LIST_FILE, { kids: ['默认小朋友'], active: '默认小朋友' });
      if (listData.kids.includes(kid)) {
        return res.json({ error: 'exists' });
      }
      
      listData.kids.push(kid);
      listData.active = kid;
      writeJsonFile(KIDS_LIST_FILE, listData);
      
      // Initialize profile file
      const kidFile = getKidFilePath(kid);
      if (!fs.existsSync(kidFile)) {
        writeJsonFile(kidFile, { progress: {}, bookmarks: [] });
      }
      return res.json({ success: true });
    }
    
    if (action === 'save') {
      const kid = (req.query.kid || '').trim();
      if (!kid) return res.status(400).json({ error: 'Missing kid parameter' });
      
      const stored = readJsonFile(getKidFilePath(kid), { progress: {}, bookmarks: [] });
      if (body.progress !== undefined) stored.progress = body.progress;
      if (body.bookmarks !== undefined) stored.bookmarks = body.bookmarks;
      
      writeJsonFile(getKidFilePath(kid), stored);
      
      // Ensure kid is in the master list
      const listData = readJsonFile(KIDS_LIST_FILE, { kids: ['默认小朋友'], active: '默认小朋友' });
      if (!listData.kids.includes(kid)) {
        listData.kids.push(kid);
        writeJsonFile(KIDS_LIST_FILE, listData);
      }
      return res.json({ success: true });
    }
  }
  
  return res.status(400).json({ error: 'Invalid request or unknown action' });
});

// --- E-Textbook APIs ---
// GET /api/pdf-list: scan and return the available textbooks
app.get('/api/pdf-list', (req, res) => {
  const currentPdfDir = getPdfDir();
  if (!fs.existsSync(currentPdfDir)) {
    return res.json({ pdfs: [], customPath: currentPdfDir });
  }
  
  fs.readdir(currentPdfDir, (err, files) => {
    if (err) {
      console.error('Error scanning PDF directory:', err);
      return res.status(500).json({ error: 'Failed to read PDF directory' });
    }
    
    // Filter for PDF files
    const pdfFiles = files
      .filter(file => file.toLowerCase().endsWith('.pdf'))
      .sort((a, b) => {
        // Natural sort helper (e.g. 1年级 before 10年级)
        return a.localeCompare(b, 'zh-CN', { numeric: true });
      });
      
    res.json({ pdfs: pdfFiles, customPath: currentPdfDir });
  });
});

// POST /api/set-pdf-path: save custom folder path
app.post('/api/set-pdf-path', (req, res) => {
  const { path: newPath } = req.body || {};
  if (!newPath) {
    return res.status(400).json({ error: 'Missing path parameter' });
  }
  if (!fs.existsSync(newPath)) {
    return res.status(400).json({ error: 'Path does not exist' });
  }
  const config = readConfig();
  config.pdfPath = newPath;
  writeConfig(config);
  console.log(`Updated custom PDF path to: ${newPath}`);
  res.json({ success: true });
});

// POST /api/upload-pdf: receive raw PDF data and save it
app.post('/api/upload-pdf', express.raw({ type: 'application/pdf', limit: '150mb' }), (req, res) => {
  const fileNameHeader = req.headers['x-file-name'];
  if (!fileNameHeader) {
    return res.status(400).json({ error: 'Missing X-File-Name header' });
  }
  const fileName = decodeURIComponent(fileNameHeader);
  
  const currentPdfDir = getPdfDir();
  // Ensure the directory exists
  if (!fs.existsSync(currentPdfDir)) {
    try {
      fs.mkdirSync(currentPdfDir, { recursive: true });
    } catch (e) {
      console.error('Error creating PDF directory:', e);
      return res.status(500).json({ error: 'Failed to create PDF directory' });
    }
  }
  
  const targetPath = path.join(currentPdfDir, fileName);
  fs.writeFile(targetPath, req.body, (err) => {
    if (err) {
      console.error('Error saving uploaded PDF:', err);
      return res.status(500).json({ error: 'Failed to save PDF' });
    }
    console.log(`Successfully uploaded PDF: ${fileName} to ${targetPath}`);
    res.json({ success: true, fileName: fileName });
  });
});

// Host the textbooks statically under /pdf/ route dynamically
app.use('/pdf', (req, res, next) => {
  const currentPdfDir = getPdfDir();
  if (fs.existsSync(currentPdfDir)) {
    express.static(currentPdfDir)(req, res, next);
  } else {
    res.status(404).send('PDF directory not found');
  }
});
console.log('E-Textbooks dynamic mount active for /pdf/');

// Host all static frontend files in the current folder
app.use(express.static(__dirname));

// --- Dynamic Port Binding & Server Startup ---
let serverPortPromise = null;

function startServer(port) {
  if (!serverPortPromise) {
    serverPortPromise = new Promise((resolve) => {
      function tryListen(p) {
        const server = http.createServer(app);
        server.listen(p, () => {
          const localIP = getLocalIP();
          console.log('\n==================================================');
          console.log(`🎉 English Word Local Server started successfully!`);
          console.log(`- Local Access:   http://localhost:${p}`);
          console.log(`- LAN Access:     http://${localIP}:${p}`);
          console.log(`==================================================\n`);
          resolve(p);
        });
        server.on('error', (err) => {
          if (err.code === 'EADDRINUSE') {
            console.warn(`⚠️ Port ${p} is currently in use. Trying next port ${p + 1}...`);
            tryListen(p + 1);
          } else {
            console.error('Server startup error:', err);
          }
        });
      }
      tryListen(port);
    });
  }
  return serverPortPromise;
}

const listenPromise = startServer(DEFAULT_PORT);

module.exports = {
  getListenPort: () => listenPromise
};
