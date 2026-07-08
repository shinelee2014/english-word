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
const DATA_DIR = path.join(__dirname, 'data');
const PDF_DIR = path.join(__dirname, '译林版小学英语【电子课本】');
const KIDS_LIST_FILE = path.join(DATA_DIR, 'kids_list.json');

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

// Get the local IPv4 address for LAN access info
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-ipv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
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
  if (!fs.existsSync(PDF_DIR)) {
    return res.json({ pdfs: [] });
  }
  
  fs.readdir(PDF_DIR, (err, files) => {
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
      
    res.json({ pdfs: pdfFiles });
  });
});

// Host the textbooks statically under /pdf/ route
if (fs.existsSync(PDF_DIR)) {
  app.use('/pdf', express.static(PDF_DIR));
  console.log(`E-Textbooks mounted at /pdf/ serving from: ${PDF_DIR}`);
} else {
  console.warn(`Warning: E-Textbooks folder not found at ${PDF_DIR}. E-Textbook viewer will be disabled.`);
}

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
