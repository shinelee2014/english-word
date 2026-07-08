const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const server = require('./server.js');

let mainWindow = null;

function createWindow(port) {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 640,
    frame: false,             // Frameless window
    resizable: true,
    transparent: false,       // Can draw rounded corners in CSS
    webPreferences: {
      nodeIntegration: false,
      contextBridge: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false      // Allow loading local media/PDF resources
    }
  });

  // Load the Express server URL
  mainWindow.loadURL(`http://localhost:${port}`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Binds IPC Events for Window Controls from the Frontend
ipcMain.on('window-close', () => {
  app.quit();
});

ipcMain.on('window-minimize', () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.handle('select-pdf-directory', async () => {
  if (!mainWindow) return null;
  const result = await dialog.showOpenDialog(mainWindow, {
    title: '选择译林版小学英语【电子课本】文件夹',
    properties: ['openDirectory']
  });
  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }
  return result.filePaths[0];
});

// App lifecycle
app.whenReady().then(() => {
  // Start Express server and wait for it to successfully listen on a port
  server.getListenPort().then((port) => {
    createWindow(port);
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      server.getListenPort().then((port) => {
        createWindow(port);
      });
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
