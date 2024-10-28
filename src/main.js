const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // Enable context isolation and use preload scripts if needed
            contextIsolation: true,
            enableRemoteModule: false, // Disable the remote module for security reasons
            nodeIntegration: false,     // Important: keep this false unless you need it
            preload: path.join(__dirname, 'preload.js') // Optional: for security reasons
        }
    });

    // Load the React app
    // Use this for development
    win.loadURL('http://localhost:3000');
    
    // Use this for production
    // win.loadFile('build/index.html');
}

// When the app is ready, create the window
app.whenReady().then(createWindow);

// Handle window close events
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Re-create a window when the app is activated
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
