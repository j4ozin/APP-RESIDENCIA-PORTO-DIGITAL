import React from 'react';
import './styles.css';
import SimpleCarousel from './carousels/Carousel';
import { imagens } from '../../../assets/imagens';

const residencialImages = [
  imagens.residenciais1, imagens.residenciais2, imagens.residenciais3,
];

const comercialImages = [
  imagens.comerciais1, imagens.comerciais2, imagens.comerciais3,
];

const corporativoImages = [
  imagens.corporativos1, imagens.corporativos2, imagens.corporativos3,
];

const projetos = [
  { id: 1, titulo: 'RESIDENCIAIS', descricao: 'Casas, apartamentos, reformas ou construções do zero — com o Briffa, você organiza todas as suas ideias para criar espaços que têm a sua cara.', imagem: <SimpleCarousel images={residencialImages} />},
  { id: 2, titulo: 'COMERCIAIS', descricao: 'Seja uma padaria, mercearia ou loja de roupas, transforme seu negócio em um ambiente funcional e marcante desde o briefing.', imagem: <SimpleCarousel images={comercialImages} />},
  { id: 3, titulo: 'CORPORATIVOS', descricao: 'De grandes escritórios a pequenas salas de reuniões, organize seus objetivos, maximize o uso de cada espaço e crie um local que favoreça a colaboração e o bem-estar da sua equipe.', imagem: <SimpleCarousel images={corporativoImages} />},
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="lp-section projetos">
       <div className="projetos-container">
        {projetos.map((projeto) => (
         <div key={projeto.id} className="projeto-card">
          
            <div> {projeto.imagem} </div>
             <div className='content'>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
         
        </div>
      </div>
      ))}
    </div>
      </section>
  );
};

export default Projects;
