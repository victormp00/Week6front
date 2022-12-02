import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const urlClientes = "http://localhost:8080/api/v1/clientes";
const urlConctactos = "http://localhost:8080/api/v1/oprtunidad/contactos/";
const urlPlanesfuturos = "http://localhost:8080/api/v1/oprtunidad/futuro/";
const urlConvertir = "http://localhost:8080/api/v1/oportunidad/convertir/";

export default function Destinos() {
  const [clients, setClients] = useState();
  useEffect(() => {
    axios.get(urlClientes).then(({ data }) => {
      setClients(data);

    })
  }, [])

  if (!clients) {
    return <h1>Loading...</h1>
  }
  function compararFecha(b){
    var year =b.substring(0,4)
    var month =b.substring(6,8)
    var day =Number(b.substring(8,10))
    var año=new Date().getFullYear()
    var diaa=new Date().getDay()
    var mees=new Date().getMonth()
    if(year>año){
      return false
    }
    else if(year==año && month>mees){
      return false
    }
    else if(year==año && month==mees && day>diaa){
      return false
    }
return true
  }
  const handleSubmit = (event) => {
    axios.post(urlConvertir+clients[0].id,).then(({ data }) => {
  })
  window.location.reload()
}
  return (
    <div className='card'>
      <h1>
        Clients
      </h1>
      <br />

      {

      clients.map(
          ({ id, convertidoCliente, contactos }) =>
            <div> <b>Id: </b> {id}  {contactos.map(
              ({ id, descripcion, fecha }) =>
                <div>{compararFecha(fecha) && <div><b>Conctactos:</b> Descripcion -- {descripcion} <b>Fecha:</b> {fecha} </div>}</div>
            )}
            <br />
            {contactos.map(
              ({ id, descripcion, fecha }) =>
                <div> {!compararFecha(fecha) && <div><b>Planes futuros:</b> Descripcion -- {descripcion} <b>Fecha:</b> {fecha} </div>} </div>
            )}
              <br />
              - <a href={"formC?oportunidad=" + id}>  Crear Conctacto/Plan Futuro</a>
              <br /><br />
            </div>

        )
      }
      <h2 className="card-title text-center">Register of Clients</h2>

    </div>
  );
}