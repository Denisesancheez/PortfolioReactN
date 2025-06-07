import React from 'react'
import Header from '../components/Header'
import "../css/Projects.css";
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FotoRICKMORTY from "../assets/RickMorty.jpg";
import FotoSandwicheria from "../assets/sandgestion.jpeg";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div>
      <Header />
      <div className="projects-row">
        <Card className="project-card">
          <Card.Img variant="top" src={FotoRICKMORTY} />
          <Card.Body>
            <Card.Title>Api RickMorty</Card.Title>
            <Card.Text>
              Desarrollé una aplicación web interactiva utilizando React para el frontend y Node.js para el backend. La app consume la API de Rick y Morty y permite explorar personajes y episodios con una interfaz intuitiva y atractiva.
            </Card.Text>
            <Button
              as="a"
              href="https://github.com/Denisesancheez/GestionSandwich.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub style={{ marginRight: "8px" }} />
              GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card className="project-card">
          <Card.Img variant="top" src={FotoSandwicheria} />
          <Card.Body>
            <Card.Title>Gestion de Sandwicheria</Card.Title>
            <Card.Text>
              En este proyecto se realizo un crud para gestionar una sandwicheria.
              Donde lse permitia consultar, eliminar, modificar y agregar productos o empleados segun el rol del usuario.
              Realizado con javaScript, HTML y CSS y Node,js para el backend.
            </Card.Text>
            <Button
              as="a"
              href="https://github.com/Denisesancheez/GestionSandwich.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub style={{ marginRight: "8px" }} />
              GitHub
            </Button>
          </Card.Body>
        </Card>

      </div>
      <Footer />
    </div>
  )
}

export default Projects