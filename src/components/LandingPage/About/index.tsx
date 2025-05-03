import React from 'react';
import './styles.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
        <div className="container flex">
          <div className="text">
            <h2>Sobre nóooooooooos</h2>
            <p>
              Somos um estúdio de arquitetura focado em design contemporâneo, funcionalidade e sustentabilidade.
              Com anos de experiência, atuamos em projetos residenciais, comerciais e corporativos.
            </p>
          </div>
          <div className="image">
            <img src="/img/planta-tecnica.jpg" alt="Planta técnica" />
          </div>
        </div>
      </section>
  );
};

export default About;
