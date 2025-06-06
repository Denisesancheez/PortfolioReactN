import React, { useEffect, useState } from 'react'
import data from "../data/data";
import fotoPerfil from '../assets/FotoCard.jpeg';
import Card from 'react-bootstrap/Card';

import Header from '../components/Header';
import "../css/Aboutme.css";


const Aboutme = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    setDatos(data); // Solo se ejecuta una vez al montar el componente
  }, []);

  if (!datos) return null;

  return (
    <div className="home-bg">
      <Header />
      <Card className="card">
        <div className="card-body">
          <Card.Title className="card-title">Me llamo {datos.nombre} {datos.apellido}!</Card.Title>
          <Card.Text className="card-text">{datos.descripcion}</Card.Text>
          <h4>Además de la programación, ¡me encantan otras actividades! <br />
          estos son mis Hobbies:</h4>
          <ul>
            {datos.hobbies.map((hobbie, idx) => <li key={idx}>{hobbie}</li>)}
          </ul>
          {/* <h4>Skills:</h4>
          <ul>
            {datos.skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul> */}
        </div>
        <div className="card-img-container">
          <img src={fotoPerfil} alt="Foto de perfil" />
        </div>
      </Card>
      <br />
      SKILLS 
    </div>
  )
}

export default Aboutme