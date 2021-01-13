import express from 'express'
// const express = require('express')
const router = express.Router()
import pacienteController from '../controllers/pacienteController.js'
// const pacienteController = require('../controllers/pacienteController')

module.exports = function() {
    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
            pacienteController.nuevoCliente
        )
        // obtiene todos los registros de pacientes de la db
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    )

    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    )

    // actualizar un registro
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )

    // elimina registro
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )
    return router
}