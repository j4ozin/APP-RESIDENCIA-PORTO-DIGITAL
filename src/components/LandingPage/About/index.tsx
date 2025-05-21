import React from 'react';
import './styles.css';
import { imagens } from '../../../assets/imagens';

const About: React.FC = () => {
  return (
    <section id="about">
          <div className="text">
            <h2>Sobre nós</h2>
            <p>
            Conectamos clientes e arquitetos de forma simples e inteligente, facilitando a criação de briefings claros e objetivos para projetos mais alinhados e eficientes.
            </p>
          </div>
          <div className="image">

            <img src={imagens.about} alt="Planta técnica" />

          </div>
      </section>
  );
};

export default About;
