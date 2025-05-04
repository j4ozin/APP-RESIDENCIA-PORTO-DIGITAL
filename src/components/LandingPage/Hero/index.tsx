import React from 'react';
import './styles.css';

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className='hero-container'>
        <img src="src\components\LandingPage\Hero\assets\banner.png" alt="Banner" className="hero-background" />
        <div className="hero-overlay">
          <h1>Briefings sem ruído. Projetos com mais precisão.</h1>
          <p>O Briffa conecta clientes e arquitetos por meio de briefings inteligentes e estruturados, garantindo clareza desde o início do projeto.</p>
        </div></div>

      <div className="hero-cards">
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\casa_moderna.png" alt="Casa Moderna" className="hero-background" />
          <div className='content'>
          <h3>Sua casa começa com um bom briefing</h3>
          <p>Transforme ideias em lar com clareza e organização desde o primeiro passo.</p>
          </div>
        </div>
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\predio_corporativo.png" alt="Prédio Corporativo" className="hero-background" />
        <div className='content'>
          <h3>Seu espaço de negócio, pensado do jeito certo</h3>
          <p>Briefings estruturados para projetos comerciais que refletem sua marca e funcionam no dia a dia.</p>
        </div></div>
        <div className="hero-card">
        <img src="src\components\LandingPage\Hero\assets\design_interiores.png" alt="Design de Interiores" className="hero-background" />
        <div className='content'>
          <h3>Um cômodo, mil possibilidades</h3>
          <p>Para reformas pontuais ou ambientes únicos, o Briffa ajuda a detalhar cada necessidade com precisão.</p>
        </div></div>
      </div>
    </section>

  );
};

export default Hero;
