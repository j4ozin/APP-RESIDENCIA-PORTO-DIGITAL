import React from 'react';
import './styles.css';
import { MdLocationPin } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { PiXLogoFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contato">
      <div className='contact-container'>
        <div className='address'>
          <MdLocationPin className='icon' />
          <p>Avenida Beira Rio, 680 – Graças<br />
            Recife-PE - CEP: 50.689-555</p>
        </div>
        <div className="socials">
          <p>Siga-nos nas redes sociais</p>
          <div className="icons">
            <a href="http://instagram.com/placeholder" target="blank"><AiFillInstagram /></a>
            <a href="http://x.com/placeholder" target="blank"><PiXLogoFill /></a>
            <a href="http://facebook.com/placeholder" target="blank"><FaSquareFacebook /></a>
            <a href="http://tiktok.com/placeholder" target="blank"><AiFillTikTok /></a>
          </div>
        </div>
        <div className='politics'>
          <p>© 2025 Politica de privacidade.</p></div>
      </div>
      <div className="form-area">
        <form>
          <div className="form-group">
            <input type="text" id="nome" placeholder=" " required />
            <label htmlFor="nome">Nome completo</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">E-mail</label>
          </div>

          <div className="form-group">
            <textarea id="senha" placeholder=" " required />
            <label htmlFor="senha">Mensagem</label>
          </div>

          <button type="submit">Enviar</button>
        </form>

      </div>


    </section>
  );
};

export default Contact;



<div className="container">
  <h2>Contato</h2>
  <div className="form-area">


  </div>
</div>