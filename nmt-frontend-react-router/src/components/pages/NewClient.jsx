import axios from 'axios'
import React from 'react'
import {useEffect, useState} from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'
import Navig from '../Navig'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
const NewClient = () => {
   
   
   const[data, setData]=useState({id:"", nombre:"",apellido:"", identificacion:"", telefono:"", fRegistro:new Date().toISOString()})
 
   const handleChange=({target})=>{
       setData({
        ...data,
        [target.name]:target.value

       }

       )
   }

   const URL ="http://localhost:8080/empleado/"
   const history = useHistory();
   
   const handleSubmit = async (e) => {

    e.preventDefault();
    
    const response = await axios.post(URL,data);

    console.log(response,response.data);

    if(response.status === 200){
        Swal.fire(
            "Realizado Exitosamente !!",

            `Empleado con C.C. ${response.data.identificacion} generado y listado`,
            "success"
        )

        history.push("/empleado")

    }
    else{
            console.log(response.status,response)
            Swal.fire(

                "Algo Salió Mal :C ",
                "No se Generó el registro",
                "error"
            )
    }

   }
   
    return (
        <div>
            {/* <a className="btn btn-secondary" href="/"> ← </a> */}
            <Navig/>
            <Form onSubmit={handleSubmit}>
<Form.Group  className = "mb-3">
    <Form.Control type="text" name="id" placeholder='Id' value={data.id} required onChange={handleChange}>
     </Form.Control>
</Form.Group>

<Form.Group className = "mb-3">
    <Form.Control type="text" name="nombre" placeholder='Nombre' value={data.nombre} required onChange={handleChange}>
     </Form.Control>
</Form.Group>

<Form.Group className = "mb-3">
    <Form.Control type="text" name="apellido" placeholder='Apellido' value={data.apellido} required onChange={handleChange}>
     </Form.Control>
</Form.Group>


<Form.Group className = "mb-3">
    <Form.Control type="number" name="identificacion" placeholder='Identificación' value={data.identificacion} required onChange={handleChange}>
     </Form.Control>
</Form.Group>


<Form.Group className = "mb-3">
    <Form.Control type="number" name="telefono" placeholder='Celular' value={data.telefono} required onChange={handleChange}>
     </Form.Control>
</Form.Group>


<Form.Group className = "mb-3">
    <Form.Control type="number" name="ventas" placeholder='$ Ventas en pesos' value={data.ventas} required onChange={handleChange}>
     </Form.Control>
</Form.Group>



<Form.Group className = "mb-3">
    <Form.Control type="number" name="prestaciones" placeholder='$ Valor de las prestaciones en pesos' value={data.prestaciones} required onChange={handleChange}>
     </Form.Control>
</Form.Group>



<Form.Group className = "mb-3">
    <Form.Control type="number" name="salario" placeholder='$ Valor del Sueldo en pesos' value={data.salario} required onChange={handleChange}>
     </Form.Control>
</Form.Group>


<Form.Group className = "mb-3">
    <Form.Control type="new Date().toISOString()" name="fRegistro" placeholder='Fecha De Registro' value={data.fRegistro} required onChange={handleChange}>
     </Form.Control>
</Form.Group>

<div className = "d-grid gap-2 d-md-flex">
<Button type="submit" className=' btn btn-secondary'>Guardar</Button>
<Button type="submit" className=' btn btn-danger' href='/empleado'>Cancelar</Button>
</div>







            </Form>
        </div>
    )
}

export default NewClient
