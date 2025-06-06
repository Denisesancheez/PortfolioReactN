import React from 'react'

import Home from './pages/Home.jsx'
import Aboutme from './pages/Aboutme.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Projects from './pages/Projects.jsx'
import useStore from './store/useStore.js'
import { Row, Col } from "react-bootstrap"



const App = () => {

  const {color,cambiarColor,texto,cambiarTexto} = useStore()

  // para futuras actualizacion de React-router-dom
  return ( 
    <div className={color ? "dark-mode" : "light-mode"}>
  <button onClick={() => {
  cambiarColor();
  cambiarTexto();}}>cambiar color</button>
        <Row>
        <Col className={color ? "black":"white"}> 
          <h1 className={texto ? "white":"black"}></h1>
          
        </Col>

      </Row>
  




    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}> 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
