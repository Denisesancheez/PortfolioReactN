import React, { useEffect, useState } from 'react'
import data from "../data/data";
import fotoPerfil from '../assets/FotoCard.jpeg';
import Card from 'react-bootstrap/Card';
import Header from '../components/Header';
import "../css/Aboutme.css";
import Footer from '../components/Footer';
import Skills from './Skills';


const Aboutme = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    setDatos(data); 
  }, []);

  if (!datos) return null;

  return (
    <div className="home-bg">
      <Header />
      <Card className="card">
        <div className="card-body">
          <Card.Title className="card-title">Me llamo {datos.nombre} {datos.apellido}!</Card.Title>
          <Card.Text className="card-text">{datos.descripcion}</Card.Text>
        </div>
        <div className="card-img-container">
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>
      </Card>
      <br />
              <h1 className="project-heading">
          Professional <strong className="purple">Skillset and tools</strong>
        </h1>
      <Skills />
      <Footer />
    </div>
  )
}

export default Aboutme