import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import SingUp from './Components/SingUp';
import Oportunity from './Components/Oportunity';
import Clients from './Components/Clients';
import Menu from './Components/Menu';
import FormC from './Components/FormC';
import FormOp from './Components/FormOp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>}>
     
    </Route>
    <Route path = "lista" element={<SingUp/>}></Route>
    <Route path = "oportunity" element={<Oportunity/>}></Route>
    <Route path = "clients" element={<Clients/>}></Route>
    <Route path = "menu" element={<Menu/>}></Route>
    <Route path = "formC" element={<FormC/>}></Route>
    <Route path = "formOp" element={<FormOp/>}></Route>
  </Routes>
  
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
