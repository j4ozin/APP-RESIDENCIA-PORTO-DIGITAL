import React from 'react';
import './styles.css';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className='hero-section'>
        <img src="src\components\LandingPage\Hero\assets\banner.png" alt="Banner" className="hero-background" />
        <div className="hero-overlay">
          <h1>Transformamos espaços em experiências</h1>
          <p>Criamos projetos arquitetônicos inovadores, sustentáveis e personalizados.</p>
        </div></div>

      <div className="hero-cards">
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\casa_moderna.png" alt="Casa Moderna" className="hero-background" />
          <div className='content'>
          <h3>Casa Moderna</h3>
          <p>Projeto residencial com foco em luz natural e integração com o ambiente.</p>
          </div>
        </div>
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\predio_corporativo.png" alt="Prédio Corporativo" className="hero-background" />
        <div className='content'>
          <h3>Prédio Corporativo</h3>
          <p>Edifício moderno, eficiente e preparado para o futuro do trabalho.</p>
        </div></div>
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\design_interiores.png" alt="Design de Interiores" className="hero-background" />
        <div className='content'>
          <h3>Design de Interiores</h3>
          <p>Ambientes internos planejados com sofisticação e funcionalidade.</p>
        </div></div>
      </div>
    </section>

  );
};

export default Hero;
