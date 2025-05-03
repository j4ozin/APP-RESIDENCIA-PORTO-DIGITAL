import React from 'react';
import './styles.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section hero">
        <div className="container">
          <h1 className="title">Transformamos espaços em experiências</h1>
          <p className="subtitle">
            Criamos projetos arquitetônicos inovadores, sustentáveis e personalizados para cada cliente.
          </p>
          {/* Cards de projetos principais */}
          <div className="cards-row">
            {/* Card exemplo */}
            <div className="card">
              <img src="/img/casa-moderna.jpg" alt="Casa Moderna" />
              <h3>Casa Moderna</h3>
              <p>Projeto residencial com foco em luz natural e integração com o ambiente.</p>
            </div>
            {/* Adicione os outros dois cards aqui */}
          </div>
        </div>
      </section>
  );
};

export default Hero;
