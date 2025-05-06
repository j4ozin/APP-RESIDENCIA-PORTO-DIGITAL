import React from 'react';
import './styles.css';
import residenciaisImg from './assets/residenciais.png';
import comerciaisImg from './assets/comerciais.png';
import corporativosImg from './assets/corporativos.png';

const projetos = [
  { id: 1, titulo: 'RESIDENCIAIS', descricao: 'Focamos no conforto, funcionalidade e estilo de vida dos moradores. Projetos personalizados transformam casas em lares únicos e acolhedores.', imagem: residenciaisImg},
  { id: 2, titulo: 'COMERCIAIS', descricao: 'Valorizamos a experiência do cliente e a atratividade do ponto de venda. Um bom projeto impulsiona vendas e fortalece a imagem da marca.', imagem: comerciaisImg},
  { id: 3, titulo: 'CORPORATIVOS', descricao: 'Criamos ambientes de trabalho eficientes, modernos e inspiradores. Espaços bem planejados aumentam a produtividade e refletem a identidade da empresa.', imagem: corporativosImg},
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projetos">
       <div className="projetos-container">
        {projetos.map((projeto) => (
         <div key={projeto.id} className="projeto-card">
            <img src = {projeto.imagem} alt ={projeto.titulo}/>
             <div className= 'content'>
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
