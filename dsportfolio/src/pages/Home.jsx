import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Home.css";
import PngHome from "../assets/pngHome.png"

const Home = () => {
  return (
    <div className="home-bg">
      <Header />
      <div className="home-intro">
        <div className="home-intro-text">
        <h1>Hi!<span className="wave-hand">👋🏻</span><br /><br /><b></b> i'm <span className="purple">Denise Sanchez</span></h1>
        </div>
        <div className="home-intro-img">
          <img src={PngHome} alt="iconohome" />
        </div> 
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="Homeintro2">LET ME INTRODUCE <span className="purple">MYSELF</span> <br />
      
      </h1>
      <p className="home-about-body">
        Soy una programadora apasionada con experiencia en el desarrollo de
        aplicaciones web.
        <br />
        <br />
        Me especializo en
        <i>
          <b className="purple"> JavaScript, HTML y CSS </b>
        </i>
        , creando sitios atractivos y funcionales
        <br />
        <br />
        Además, tengo conocimientos en
        <i>
          <b className="purple"> React.js y Node.js</b>
        </i> para crear experiencias de usuario dinámicas e interactivas.
        {" "}
        <br />
        <br />
        <i>
          <b>Mi objetivo es seguir aprendiendo y creando soluciones creativas que hagan la diferencia. 
          </b>
        </i>  <br /> <br />
        Si quieres saber más sobre mí o colaborar en algún proyecto,
      </p>
      <h4 className="White">¡no dudes en contactarme!</h4>

      <Footer />
    </div>
  );
};

export default Home;
