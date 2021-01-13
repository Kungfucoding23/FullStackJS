import express from 'express'

// crear el servidor
const app = express()

// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})