import React from 'react'

import {useEffect, useState} from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import * as ReactBootStrap from "react-bootstrap";
import Swal from 'sweetalert2'

const ClientTable = () => {

  //paso 1, agregar funcion hook, con nombre del campo(data) que queremos manejar y modificar
  
  const baseURL="http://localhost:8080/empleado/"
  const [data , setData] = useState([])
  
  //const[users , setUsers] = useState({elementae:[]})
  // useEffect(() => {
  //   const fetchUsersList = async () => {
  //     const {data} = await axios (
  //       "http://localhost:8080/empleado/"
  //     );
  //       setUsers({elementae:data});
  //       console.log(data);
  //   };
  //   fetchUsersList();



  // }, [setUsers]);

  const peticionGet = async () => {
    await axios(baseURL)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error)
    })}
   useEffect(() =>{
peticionGet();
},[setData]);


const peticionPost = async () =>{
await axios.post(baseURL,clienteSeleccionado)
.catch(error=>{
console.log(error);
})
peticionGet();
setModalEditar(false);
}

const peticionDelete=async()=>{
await axios.delete(baseURL+clienteSeleccionado.id)
.then(response =>{
setData(data.filter(cliente=>cliente.id!==clienteSeleccionado.id));
setModalEliminar(false);
Swal.fire(
  "confirmado",
  response.data,
  "warning"
)
}).catch(error =>{
console.log(error);
})
}

const[modalEditar, setModalEditar]=useState(false);
const[modalEliminar , setModalEliminar]=useState(false);
const[clienteSeleccionado, setClienteSeleccionado]=useState({
nombre:"",
apellido:"",
identificacion:"",
telefono:"",
})

const seleccionarCliente=(elemento)=>{
setClienteSeleccionado(elemento);
setModalEditar(true);
}

const seleccionarClienteDelete=(elemento)=>{
setClienteSeleccionado(elemento);
setModalEliminar(true);
}

const handleChange=e=>{
const{name,value}=e.target;
setClienteSeleccionado((prevState)=>({
...prevState,
[name]:value
}));
}

const [datosBusqueda,setDatosBusqueda]=useState(
{
caja:"",
filtro:"1"
}
)
const handleInputChange=e=>{
const{name,value}=e.target;
setDatosBusqueda((prevState)=>({
...prevState,
[name]:value
}));
}

const buscarClientes = async ()=>{

switch (datosBusqueda.filtro) {
case "1":
  await axios.get(baseURL+datosBusqueda.caja)
  .then(response=>{
    if(response.data !==null && !Array.isArray(response.data)){
      setData([response.data])}           
    else{
        Swal.fire(
          "No hay resultado",
          "",
          "info")}
  }).catch(error=>{
    console.log(error);
  })
  break;
//"/identificacion
case "2":
  await axios.get(baseURL+"nombre/"+datosBusqueda.caja)
  .then(response =>{
    if(response.data !==null){
      if(response.data.length !==0){
        setData(response.data);
      }else{
        Swal.fire(
          "No hay resultado",
          "",
          "info")
    } 
      }else{
      Swal.fire(
        "No hay resultado",
        "",
        "info")
    }
  })
  break;
    
    case "3":
  await axios.get(baseURL+"apellido/"+datosBusqueda.caja)
  .then(response =>{
    if(response.data !==null){
      if(response.data.length !==0){
        setData(response.data);
      }else{
        Swal.fire(
          "No hay resultado",
          "",
          "info")
    } 


  }else{
    Swal.fire(
      "No hay resultado",
      "",
      "info")
  }


  



})
break;


case "4":

          if(!isNaN(datosBusqueda.caja) && datosBusqueda.caja!==""){
            await axios.get(baseURL+"identificacion/"+datosBusqueda.caja)
            .then(response=>{
              if(response.data.length !==0){
                setData(response.data);
              }else{
                Swal.fire(
                  "No hay resultado",
                  "",
                  "info")
              }
            }).catch(error =>{
              console.log(error);
            })
          }else{
            Swal.fire(
              "No introdujo un valor numerico",
              "",
              "info")
          }

          break;         
      
        default:
          break;
      }

    }

// case "5":
//   await axios.get(baseURL+"/telefono"+datosBusqueda.caja)
//   .then(response =>{
//     if(response.data !==null){
//       if(response.data.length !==0){
//         setData(response.data);
//       }else{
//         Swal.fire(
//           "No hay resultado",
//           "",
//           "info")
//     } 


//   }else{
//     Swal.fire(
//       "No hay resultado",
//       "",
//       "info")
//   }


  



// })
// break;




  

// case "3":

//   if(!isNaN(datosBusqueda.caja) && datosBusqueda.caja!==""){
//     await axios.get(baseURL+"puntos/"+datosBusqueda.caja)
//     .then(response=>{
//       if(response.data.length !==0){
//         setData(response.data);
//       }else{
//         Swal.fire(
//           "No hay resultado",
//           "",
//           "info")
//       }
//     }).catch(error =>{
//       console.log(error);
//     })
//   }else{
//     Swal.fire(
//       "No introdujo un valor numerico",
//       "",
//       "info")
//   }

//   break;         

// default:
//   break;
// }


return (
<div>

<ReactBootStrap.Form>
        <ReactBootStrap.Row>

            <ReactBootStrap.Col xs="auto" className="my-3">
                <ReactBootStrap.Form.Control  name="caja" onChange={handleInputChange} placeholder="Que vas a buscar? "/>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col xs="auto" className="my-3">
                <ReactBootStrap.Form.Select name="filtro" onChange={handleInputChange}>
                    <option value="1">Id</option>
                    <option value="2">Nombre</option>
                    <option value="3">Apellido</option>
                    <option value="4">Identificación</option>
                    {/* <option value="3">Puntos</option> */}
                </ReactBootStrap.Form.Select>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col xs="auto" className="my-3">
                <ReactBootStrap.Button className="btn-secondary" onClick={()=>buscarClientes()}>Buscar</ReactBootStrap.Button>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col className="my-3 d-md-flex justify-content-md-end">
                <ReactBootStrap.Button className="btn-secondary" href="/nuevaNomina">Nueva Nómina</ReactBootStrap.Button>
            </ReactBootStrap.Col>

        </ReactBootStrap.Row>
    </ReactBootStrap.Form>

   <table className="table table-hover">
<thead>
<tr>
<th scope="col">Id</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Identificacion</th>
<th scope="col">Celular</th>
<th scope="col">Fecha</th>
<th scope="col">Nómina</th>
{/* <th scope="col">Departamento</th>
<th scope="col">Ciudad</th> */}
<th scope="col">Alterar Data</th> 
</tr>
</thead>
<tbody>
{
data.map((empleado) =>(
<tr key={empleado.id}>
    <td>{empleado.id}</td>
    <td>{empleado.nombre}</td>
    <td>{empleado.apellido}</td>
    <td>{empleado.identificacion}</td>
    <td>{empleado.telefono}</td> 
    <td>{empleado.fRegistro}</td>
    <td>{empleado.ventas * 0.3 - empleado.prestaciones + empleado.salario}</td>
    {/* <td>{cliente.address !==null ? cliente.address.departamento : "sin definir" }</td>
    <td>{cliente.address !==null ? cliente.address.ciudad : "sin definir" }</td> */}
    <td><button className="btn-neon-gray" onClick={()=>seleccionarCliente(empleado)} >Editar</button> {"   "} 
      <button className="btn-neon-red"onClick={()=>seleccionarClienteDelete(empleado)}>Eliminar</button></td>       
</tr>
))
}    
</tbody>
</table>
    <Modal show={modalEditar}>
      <ModalTitle>
        <h2>Editar Cliente</h2>
      </ModalTitle>
      <ModalBody>
        <div className="form-group">
          <label>Id</label>
          <input className="form-control"
          readOnly
          type="text"
          value={clienteSeleccionado.id}
          />
          <br/>
          <label>Nombre</label>
          <input className="form-control"
          type="text"
          name="nombre"
          value={clienteSeleccionado.nombre}
          onChange={handleChange}
          />
          <br/>
          <label>Apellido</label>
          <input className="form-control"
          type="text"
          name="apellido"
          value={clienteSeleccionado.apellido}
          onChange={handleChange}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={()=>peticionPost()}>Actualizar</button>
        <button className="btn btn-danger" onClick={()=>setModalEditar(false)}>Cancelar</button>
      </ModalFooter>
    </Modal>

    <Modal show={modalEliminar}>
      <ModalBody>
        ¿Está seguro que desea eliminar al empleado {clienteSeleccionado.nombre} {clienteSeleccionado.apellido} ?
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={()=>peticionDelete()}>Si</button>
        <button className="btn btn-secondary" onClick={()=>setModalEliminar(false)}>No</button>
      </ModalFooter>

    </Modal>









  
  {/* return (
        <div>
    <table className="table table-hover">
            
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col"> Identificación </th>
      <th scope="col"> Teléfono </th>
    </tr>
  </thead>
  <tbody>
    
      {users.elementae && 
      users.elementae.map((item) => (
      <tr key={item.id}> 
        <td>{item.id}</td>
        <td>{item.nombre}</td>
        <td>{item.apellido}</td>
        <td>{item.identificacion}</td>
        <td>{item.telefono}</td>
        <td><button className='btn btn-secondary'>Editar</button>{"  "}
        <button className='btn btn-danger'>Eliminar</button></td>
      </tr>
      ))
      }
  
  </tbody>
</table>
        </div> */}
        </div>
    )
}

export default ClientTable
