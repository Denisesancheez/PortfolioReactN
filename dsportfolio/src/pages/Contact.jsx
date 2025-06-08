import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enviado:\nNombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="contacto-centro">
      <Header />
      <h2>Deja tu informacion y en breve me pondre en contacto contigo!</h2>
        <br />
          <form onSubmit={handleSubmit} className='contact-form'>
              <label>Nombre:</label>
              <input
                  type="text"
                  value={nombre}
                  placeholder='Ingrese su nombre'
                  onChange={(e) => setNombre(e.target.value)}
                  required
              />
              <label>Email:</label>
              <input
                  type="email"
                  value={email}
                  placeholder='Ingrese su email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <label>Mensaje:</label>
              <input
                    type="text"
                  value={mensaje}
                  placeholder='Deja aqui tu comentario'
                  onChange={(e) => setMensaje(e.target.value)}
                  required
              ></input>
              
              <button type="submit">Enviar</button>
          </form>
        <br />
        <br />
        <br />
        <Footer />
    </div>
  );
};

export default Contact;
