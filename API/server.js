import express from 'express'
// const express = require('express')
import mongoose from 'mongoose'
// const mongoose = require('mongoose')
import routes from './routes/index.js'
// const routes = require('./routes')
import bodyParser from 'body-parser'
// const bodyParser = require('body-parser')

// crear el servidor
const app = express()
    // conectar a mongo
mongoose.Promise = global.Promise
    //esta corriendo en local
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// habilitar bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// habilitar routing
app.use('/', routes()) //middleware de express



// puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
})