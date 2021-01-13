import mongoose from 'mongoose'
// const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema({
    nombre: {
        type: string,
        trim: true
    },
    propietario: {
        type: string,
        trim: true
    },
    fecha: {
        type: string,
        trim: true
    },
    hora: {
        type: string,
        trim: true
    },
    sintomas: {
        type: string,
        trim: true
    }
})

// hacemos disponible este modelo
module.exports = mongoose.model('Paciente', pacienteSchema)