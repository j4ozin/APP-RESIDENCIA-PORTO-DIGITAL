import React from 'react';
import './styles.css';
import SimpleCarousel from './carousels/Carousel';
import { imagens } from '../../../assets/imagens';

const projetos = [
  {
    id: 1,
    titulo: 'RESIDENCIAIS',
    descricao:
      'Casas, apartamentos, reformas ou construções do zero — com o Briffa, você organiza todas as suas ideias para criar espaços que têm a sua cara.',
    imagens: [imagens.residenciais1, imagens.residenciais2, imagens.residenciais3],
  },
  {
    id: 2,
    titulo: 'COMERCIAIS',
    descricao:
      'Seja uma padaria, mercearia ou loja de roupas, transforme seu negócio em um ambiente funcional e marcante desde o briefing.',
    imagens: [imagens.comerciais1, imagens.comerciais2, imagens.comerciais3],
  },
  {
    id: 3,
    titulo: 'CORPORATIVOS',
    descricao:
      'De grandes escritórios a pequenas salas de reuniões, organize seus objetivos, maximize o uso de cada espaço e crie um local que favoreça a colaboração e o bem-estar da sua equipe.',
    imagens: [imagens.corporativos1, imagens.corporativos2, imagens.corporativos3],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="lp-section lp-projects">
      <div className="lp-projects-container">
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            className="lp-project-card"
            aria-label={`Projeto ${projeto.titulo}`}
          >
            <div className="lp-project-image">
              <SimpleCarousel images={projeto.imagens} />
            </div>
            <div className="lp-project-content">
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;