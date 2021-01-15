const { app, BrowserWindow } = require('electron')

let appWindow
    // Ventana principal del proyecto
function createWindow() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    })

    // Cuando la app es cerrada se elimina lo que se este utilizando de memoria
    appWindow.on('closed', () => {
        appWindow = null
    })

    // Cargar HTML
    appWindow.loadFile('index.html')

    // Cuando la app este lista, mostrar la ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show()
    })
}

// Una vez que la app este lista
app.on('ready', createWindow)