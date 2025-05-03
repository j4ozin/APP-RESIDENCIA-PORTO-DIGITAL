import React from 'react';
import './styles.css';

const Services: React.FC = () => {
  return (
    <section id="services" className="section servicos">
        <div className="container">
          <h2>Serviços</h2>
          <div className="columns">
            {/* Coluna Residenciais */}
            <div className="column">
              <h3>Residenciais</h3>
              <ul>
                <li>Projeto arquitetônico personalizado</li>
                <li>Design de interiores</li>
                <li>Reformas e ampliações</li>
              </ul>
            </div>
            {/* Outras colunas para Comerciais e Corporativos */}
          </div>
        </div>
      </section>
  );
};

export default Services;
