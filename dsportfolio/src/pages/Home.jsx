import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";
import FotoPerfil from "../assets/FotoCard.jpeg";
const Home = () => {
  return (
    <div className="home-bg">
      <Header />
      <div className="home-intro">
        <div className="home-intro-text">
        <h1>Hola!<span className="wave-hand">👋🏻</span><br /><br /><b></b> Soy <span className="purple">Denise Sanchez</span></h1>
        </div>
        <div className="home-intro-img">
          <img src={FotoPerfil} alt="iconohome" />
        </div>
      </div>
      <br />
      <br />


      <div className="home-bloque">
        <h1 className="Homeintro2">
          Dejame <span className="purple"> Presentarme </span>
        </h1>
        <p className="TextoHome">
          Soy Denise,estudiante de programacion enfocada en crear soluciones digitales efectivas y con impacto.
          Me apasiona el aprendizaje constante y disfruto trabajar en proyectos que requieren creatividad y análisis. Siempre busco aportar valor a través de un código claro y bien estructurado.
          ¡Te invito a conocer mis proyectos y a colaborar juntos para transformar ideas en realidad!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
