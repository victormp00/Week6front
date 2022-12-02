
import React, { useEffect } from 'react';
import SingUp from "./SingUp.js";
import './Main.css';
import axios from "axios";

import { useState } from "react"
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
const urlLog = "http://localhost:8080/api/v1/usuario/log";

const divStyle = {
  display: 'none',
  color: '#FF0000',

};
function Main() {

  const [nombre, setNombre] = useState([]);
  const [contraseña, setContraseña] = useState([]);
  const handleChange = (event) => {
    setNombre(event.target.form[0].value);
    setContraseña(event.target.form[1].value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre != "") {
      axios.post(urlLog, {
        nombre: nombre,
        contrasena: contraseña,
      }).then(({ data }) => {
        if (data) {
          window.location.href = "menu";
        }
        else {
          document.getElementById("error").style.display = "contents";
          document.getElementById("error2").style.display = "contents";
          document.getElementById("error3").style.display = "contents";
          document.getElementById("error4").style.display = "contents";
        }
      })
    } else {
      document.getElementById("error").style.display = "contents";
      document.getElementById("error2").style.display = "contents";
      document.getElementById("error3").style.display = "contents";
      document.getElementById("error4").style.display = "contents";
    }
  };
  return (
    <div>

      <h2 className="card-title text-center">Login</h2>
      <form _lpchecked="1">
        <ul>
          <li>
            <label htmlFor="msg">Nombre: </label>
            <input type="text" id="name" placeholder="Name" onChange={handleChange}></input>

          </li>
          <li style={divStyle} id="error3">
            <p style={divStyle} id="error">Usuario o contraseña equivocadas</p>
          </li>
          <li>
            <label htmlFor="msg">Contraseña: </label>
            <input type="password" id="password" placeholder="Password" onChange={handleChange}></input>

          </li>
          <li style={divStyle} id="error4">
            <p style={divStyle} id="error2">Usuario o contraseña equivocadas</p>
          </li>
          <li>
            <label htmlFor="msg">Login: </label>
            {/* <a href="lista" className="btn btn-primary" > Create Account</a>*/}
            <button onClick={handleSubmit}>Login</button>
          </li>
        </ul>
      </form>
    </div>

  );

}
export default Main;