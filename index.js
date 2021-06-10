const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        title: 'Proton Apps',
        titleBarStyle: 'hiddenInset',
        width: 1000,
        height: 600,
        icon: "./app.ico",
        resizable: true,
        show: false
    })
    win.menuBarVisible = false;
    win.loadURL('https://account.protonmail.com/login')

    win.webContents.on('did-finish-load', function () {
        win.show();
    });
};

app.whenReady().then(() => {
    createWindow();
});

app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
    window.setSize(1000, 600)
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});