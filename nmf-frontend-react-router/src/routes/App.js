import React from "react";
import { //Import de componentes de react router (Necesarios para trazar los paths con <Route> )
  BrowserRouter, //acaso decir import as no es simplemente ponerle un sobrenombre a lo que ya estamos usando? import BrowseRouter as Router
  Switch,
  Route,
  //Link,
  //NavLink

} from "react-router-dom"; //Aqui se importan los componentes para poder trazar los paths (usando <Route path="/lol"> & </Route>
import Inicio from '../components/pages/Inicio';
import Contacto from '../components/pages/Contacto';
import Nosotros from '../components/pages/Nosotros';
import Empleado from "../components/pages/Empleado";
import Layout from "../conts/Layout";
import Err404 from "../components/pages/Err404";
import NewClient from "../components/pages/NewClient";

function App() { //Este es el inicio de un componente llamado APP. 
  return ( //pueden haber varios COMPONENTS Pero CADA UNO RETORNARA UN SOLO ELEMENTO 
          //(BIG DIV) CON O SIN OTROS OTROS DIVS ADENTRO        
          //App envia todo esto al index   
          //hay una big div container que contiene otros divs
          //las etiquetas path tienen una ruta y contienen algo.
          //Aqui en el switch es importante ir de lo mas especifico a lo mas generico
          //Si existiera contactos especificos, iria debajo de contasctos asi:
       //contacts/contacisespecificos
    <BrowserRouter>
     <Layout>
   
      
     
     <Switch>
     <Route exact path="/empleado" component={Empleado}/>
       <Route exact path="/contacto" component = {Contacto}/>
       <Route exact path="/nosotros" component = {Nosotros}/>
       <Route exact path="/nuevaNomina" component={NewClient}/>
       <Route exact path="/" component={Inicio}/>
       <Route path="*" component={Err404}/>
     </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
