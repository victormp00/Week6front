import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


export default function Destinos() {
 
  return (
    <div className='card'>
      <h2 className="card-title text-center">Menu</h2>
      <a href="clients" className="btn btn-primary"> Ver Clients</a>
      <a href="oportunity" className="btn btn-primary"> Ver Oportunity</a>
      <a href="formOp" className="btn btn-primary"> Crear Oportunidad</a>
    </div>
  );
}