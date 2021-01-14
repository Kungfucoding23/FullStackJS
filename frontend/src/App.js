import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import clienteAxios from './config/axios'
// componentes
import Pacientes from './components/Pacientes'
import NuevaCita from './components/NuevaCita'
import Cita from './components/Cita'

function App() {
    // state de la app
    const [citas, guardarCitas] = useState([])
    useEffect(() => {
            const consultarApi = () => {
                clienteAxios.get('/pacientes')
                    .then(respuesta => {
                        // colocar en el state el resultado
                        guardarCitas(respuesta.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            consultarApi()
        }, []) //en [] van las dependencias
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = {
            () => < Pacientes citas = { citas }
            />} /
            > <
            Route exact path = "/nueva"
            component = { NuevaCita }
            /> <
            Route exact path = "/cita/:id"
            component = { Cita }
            /> < /
            Switch > <
            /Router>
        )
    }

    export default App