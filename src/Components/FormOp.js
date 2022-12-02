
import React, { useEffect } from 'react';
import SingUp from "./SingUp.js";
import './FomC.css';
import axios from "axios";
import { useState } from "react"
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";

var urlLog;
const divStyle = {
  display: 'none',
  color: '#FF0000',

};
function Main() {
  const [descripcion, setDescripcion] = useState([]);
  const [id, setId] = useState([]);
  const [dias, setDias] = useState([]);
  const [meses, setMeses] = useState([]);
  const [anos, setAnos] = useState([]);

  const handleChange = (event) => {
    setDescripcion(event.target.form[0].value);
    var dia=event.target.form[1].value;
    var mes=event.target.form[2].value;
    var ano=event.target.form[3].value;
    var id=event.target.form[4].value;
    if(dia<10){dia="0"+dia}
    setDias(dia);
    if(mes<10){mes="0"+mes}
    setMeses(mes);
    if(ano<10){ano="0"+ano}
    setAnos(ano);
    setId(id);
    console.log(id+anos)
  };

  const handleSubmit = (event) => {
    event.preventDefault(id+anos);
    console.log()
    var urlLog = ("http://localhost:8080/api/v1/oportunidad/"+descripcion+"/"+id+"/"+anos+meses+dias);
    if (descripcion != "") {
      axios.post(urlLog).then(({ data }) => {
        console.log(data)
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
  const enforceMinMax = (el) => { 
    if (el.value != "") {
      if (parseInt(el.target.value) < parseInt(el.target.attributes[2].nodeValue)) {
        el.target.value = el.target.attributes[2].nodeValue;
      }
      if (parseInt(el.target.value) > el.target.attributes[3].nodeValue) {
        el.target.value = el.target.attributes[3].nodeValue;
      }
    }
  }
  return (
    <div>

      <h2 className="card-title text-center">Create Oportunity</h2>
      <form _lpchecked="1">
        <ul>
          <li>
            <label htmlFor="msg">Descripcion: </label>
            <input  type="text" id="name" placeholder="Descripcion" className="submissionfield" onChange={handleChange}></input>

          </li>
          <li style={divStyle} id="error3">
            <p style={divStyle} id="error">datos erroneos</p>
          </li>
          <li>
            <label htmlFor="msg">Fecha(dd/mm/yy): </label>
            <input type="number" id="password" min="1" max="31" placeholder="Dias" onKeyUp={enforceMinMax} onChange={handleChange}></input>
            <input type="number" id="password" min="1" max="12" placeholder="Meses" onChange={handleChange} onKeyUp={enforceMinMax}></input>
            <input type="number" id="password" min="0" max="99" placeholder="Años" onChange={handleChange} onKeyUp={enforceMinMax}></input>

          </li>
          <li style={divStyle} id="error4">
            <p style={divStyle} id="error2">datos erroneos </p>
          </li>
          <li>
          <label htmlFor="msg">Identificador Numerico: </label>
          <input type="number" id="password" min="0" max="999" placeholder="Id" onKeyUp={enforceMinMax} onChange={handleChange}></input>
          </li>
          <li>
            <label htmlFor="msg">Crear: </label>
            {/* <a href="lista" className="btn btn-primary" > Create Account</a>*/}
            <button onClick={handleSubmit}>Crear </button>
          </li>
        </ul>
      </form>
    </div>

  );

}
export default Main;