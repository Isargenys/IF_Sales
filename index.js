const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let MainWindow;

app.on('ready', function() {
  MainWindow = new BrowserWindow({width: 1000, height: 700});
  MainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src/pages/mainwindow.html'),
    protocol: 'file:',
    slashes: true
  }));
})
