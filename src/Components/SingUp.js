import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  import { useState } from "react"
  import axios from "axios";
  const url = "http://localhost:8080/api/v1/usuarios";
  const url1 = "http://localhost:8080/api/v1/usuario";
  const urlporNombre = "http://localhost:8080/api/v1/usuario/solera@solera.com";
  const urlMontar = "http://localhost:8080/api/v1/usuario/"+{}+"/linea/"+{};
  const urlLoginYaBien = "http://localhost:8080/api/v1/usuario/solera@solera.com/lineas/bootcamp4"
  

  export default function Destinos(){
    const [usuario, setUsuario] = useState([]);
    const [nombre, setNombre] = useState([]);
    const [contraseña, setContraseña] = useState([]);
    const [correo, setCorreo] = useState([]);
    axios.get(url).then(({ data }) => {
      setUsuario(data);
      
    })
    const handleChange = (event) => {
    setNombre(event.target.form[0].value);
    setContraseña(event.target.form[2].value);
    setCorreo(event.target.form[1].value)
    console.log(nombre+"---"+contraseña+"---"+correo);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(nombre+usuario);
      // axios.post
    };

    return(
    <div >
<div>
        <div class="container">
  <div class="row justify-content-center">
  <div class="col-md-5">
   <div class="card">
   <h2 class="card-title text-center">Real World App</h2>
     <h2 class="card-title text-center">Register</h2>
      <div class="card-body py-md-4">
       <form _lpchecked="1">
          <div class="form-group">
             <input type="text" class="form-control" id="name" placeholder="Name" onChange={handleChange}></input>
        </div>
        <div class="form-group">
             <input type="email" class="form-control" id="email" placeholder="Email" onChange={handleChange}></input>
                            </div>
                            
                          
   <div class="form-group">
     <input type="password" class="form-control" id="password" placeholder="Password" onChange={handleChange}></input>
   </div>
   <div class="form-group">
      <input type="password" class="form-control" id="confirm-password" placeholder="confirm-password" ></input>
   </div>
   <div class="d-flex flex-row align-items-center justify-content-between">

      <a href="/" class="btn btn-primary" > Volver</a>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>
</div>
    </div>
    ); 
}