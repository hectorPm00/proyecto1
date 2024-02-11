import React from 'react';
import '../../src/App.css';
import InstagramImg from '../img/Instagram.jpg'; // Importa la imagen de Instagram
import WhatsappImg from '../img/Whats.png'; // Importa la imagen de Whatsapp
import FacebookImg from '../img/face.jpg'; // Importa la imagen de Facebook

const Tercercomponente = () => {
  return (
    <div>
      <footer>
        <a href="https://www.instagram.com/blackcoastmx?igsh=Y2hjZ2N2cHpheHVz">
          <img src={InstagramImg} alt="Instagram" />
        </a> 
        <a href="www.google.com">
          <img src={WhatsappImg} alt="Whatsapp" />
        </a>
        <a href="https://www.facebook.com/blackcoastmx?mibextid=LQQJ4d">
          <img src={FacebookImg} alt="Facebook" />
        </a>
      </footer>
    </div>
  );
}

export default Tercercomponente;
