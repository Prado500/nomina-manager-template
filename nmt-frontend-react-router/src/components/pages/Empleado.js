import React from 'react'
import ClientTable from '../ClientTable'
import Navig from '../Navig'
import * as ReactBootstrap from "react-bootstrap"
const Empleado = () => {
    return (
        <div>
        {/* <Navig/>
        <ReactBootstrap.Form ><ReactBootstrap.Row>
        
       
        <ReactBootstrap.Col xs="auto" className="my-4">
            <ReactBootstrap.Form.Control placeholder='Que vas a buscar?'> 
            </ReactBootstrap.Form.Control>
            </ReactBootstrap.Col> 
          
            <ReactBootstrap.Col xs="auto" className='my-4'> 
            <ReactBootstrap.Form.Select xs="auto" className="me-sm-2" id="filtro">
                <option value="0"></option>
                <option value="1">C.C.</option>
                <option value="2">ID</option>
                <option value="3">Nombre</option>

            </ReactBootstrap.Form.Select>
            </ReactBootstrap.Col>  
      
        <ReactBootstrap.Col xs="auto" className='my-4'>
        <ReactBootstrap.Button type='submit' > Buscar </ReactBootstrap.Button >
        </ReactBootstrap.Col>
        
    
        <ReactBootstrap.Col  className='my-4 d-md-flex'>
        <ReactBootstrap.Button type='submit' className='btn btn-secondary' href='/nuevaNomina' > Generar Nueva Nómina </ReactBootstrap.Button >
        </ReactBootstrap.Col>
        
        
        </ReactBootstrap.Row></ReactBootstrap.Form> */}
        
        <Navig/>
        <ClientTable/>    
        </div>
    )
}

export default Empleado
