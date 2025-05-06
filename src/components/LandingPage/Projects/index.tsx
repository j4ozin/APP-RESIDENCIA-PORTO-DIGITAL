import React from 'react';
import './styles.css';
import SimpleCarousel from './carousels/Carousel';

const residencialImages = [
  'src/components/LandingPage/Projects/carousels/imgs/residenciais1.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/residenciais2.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/residenciais3.jpg',
];

const comercialImages = [
  'src/components/LandingPage/Projects/carousels/imgs/comerciais1.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/comerciais2.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/comerciais3.jpg',
];

const corporativoImages = [
  'src/components/LandingPage/Projects/carousels/imgs/corporativos1.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/corporativos2.jpg',
  'src/components/LandingPage/Projects/carousels/imgs/corporativos3.jpg',
];

const projetos = [
  { id: 1, titulo: 'RESIDENCIAIS', descricao: 'Casas, apartamentos, reformas ou construções do zero — com o Briffa, você organiza todas as suas ideias para criar espaços que têm a sua cara.', imagem: <SimpleCarousel images={residencialImages} />},
  { id: 2, titulo: 'COMERCIAIS', descricao: 'Seja uma padaria, mercearia ou loja de roupas, transforme seu negócio em um ambiente funcional e marcante desde o briefing.', imagem: <SimpleCarousel images={comercialImages} />},
  { id: 3, titulo: 'CORPORATIVOS', descricao: 'De grandes escritórios a pequenas salas de reuniões, organize seus objetivos, maximize o uso de cada espaço e crie um local que favoreça a colaboração e o bem-estar da sua equipe.', imagem: <SimpleCarousel images={corporativoImages} />},
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projetos">
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
