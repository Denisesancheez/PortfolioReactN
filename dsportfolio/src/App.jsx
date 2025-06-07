import React from 'react'

import Home from './pages/Home.jsx'
import Aboutme from './pages/Aboutme.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Projects from './pages/Projects.jsx'
import useStore from './store/useStore.js'
import { Row, Col } from "react-bootstrap"
import { FaRegMoon, FaRegSun } from "react-icons/fa";



const App = () => {

  const {color,cambiarColor,texto,cambiarTexto} = useStore()

  // para futuras actualizacion de React-router-dom
  return ( 
    <div className={color ? "dark-mode" : "light-mode"}>

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

      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
