import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

const Cita = (props) => {
    if (!props.cita) {
        props.history.push('/')
        return null
    }

    //elimina un registro
    const eliminarCita = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No lo podras recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                // Alerta de eliminado
                Swal.fire(
                    'Eliminado!',
                    'Operación realizada con exito.',
                    'success'
                )

                //Eliminado de la bd
                clienteAxios.delete(`/pacientes/${id}`)
                    .then(res => {
                        props.guardarConsultar(true)
                        props.history.push('/')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        })
    }

    return ( <
        Fragment >
        <
        h1 className = "my-5" > Nombre cita: { props.cita.nombre } < /h1>  <
        div className = "container mt-5 py-5" >
        <
        div className = "row" >
        <
        div className = "col-12 mb-5 d-flex justify-content-center" >
        <
        Link to = { '/' }
        className = "btn btn-success text-uppercase py-2 px-5 font-weight-bold" > Volver < /Link> < /
        div >
        <
        div className = "col-md-8 mx-auto" >
        <
        div className = "list-group" >
        <
        div className = "p-5 list-group-item list-group-item-action flex-column align-items-center" >
        <
        div className = "d-flex w-100 justify-content-between mb-4" >
        <
        h3 className = "mb-3" > { props.cita.nombre } < /h3>  <
        smal className = "fecha-alta" > { props.cita.fecha } - { props.cita.hora } <
        /smal> < /
        div >
        <
        p className = "mb-0" > { props.cita.sintomas } <
        /p>  <
        div className = "contacto py-3" >
        <
        p > Dueño: { props.cita.propietario } < /p> <
        p > Teléfono: { props.cita.telefono } < /p> < /
        div >
        <
        div className = "" >
        <
        button type = "button"
        className = "text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
        onClick = {
            () => eliminarCita(props.cita._id)
        } >
        Eliminar x <
        /button> < /
        div > <
        /div> < /
        div >

        <
        /div> < /
        div > < /
        div > <
        /Fragment>
    )
}

export default withRouter(Cita)