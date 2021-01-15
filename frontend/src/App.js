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
        // eslint-disable-next-line
    const [consultar, guardarConsultar] = useState(true)
    useEffect(() => {
            if (consultar) {
                const consultarApi = () => {
                    clienteAxios.get('/pacientes')
                        .then(respuesta => {
                            // colocar en el state el resultado
                            guardarCitas(respuesta.data)
                                // deshabilitar la consulta
                            guardarConsultar(false)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
                consultarApi()
            }
        }, [consultar]) //en [] van las dependencias
    return ( <
            Router >
            <
            Switch >
            <
            Route exact path = "/"
            component = {
                () => < Pacientes citas = { citas }
                guardarConsultar = { guardarConsultar }
                />} / >
                <
                Route exact path = "/nueva"
                component = {
                    () => < NuevaCita guardarConsultar = { guardarConsultar }
                    />} / >
                    <
                    Route exact path = "/cita/:id"
                    render = {
                        (props) => {
                            const cita = citas.filter(cita => cita._id === props.match.params.id)
                            return ( <
                                Cita cita = { cita[0] }
                                />
                            )
                        }
                    }
                    /> < /
                    Switch > <
                    /Router>
                )
            }

            export default App