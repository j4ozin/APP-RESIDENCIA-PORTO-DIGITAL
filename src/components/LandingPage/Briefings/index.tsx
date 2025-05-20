import React from 'react';
import './styles.css';
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Briefings: React.FC = () => {
  return (
    <section id="briefings" className="section servicos">
      <div className="briefings-cards">
        <div className="briefings-card">
          <div className='content'>
            <div className='title'>
              <HiOutlineHomeModern className='icon' />
              <h3>RESIDENCIAIS</h3></div>
            <ul>
            <li><Link to={'/briefing/casadozero'}>Casa do Zero</Link></li>
            <li>Reforma Total</li>
            <li>Cozinha dos Sonhos</li>
            <li>Espaço Kids</li>
            <li>Home Office Compacto</li>
            </ul>
            <div className="right-text"><Link to="/briefing">Ver mais</Link></div>
          </div>
        </div>
        <div className="briefings-card">
        <div className='content'>
          <div className='title'>
            <TbBuildingStore className='icon' />
            <h3>COMERCIAIS</h3></div>
            <ul>
            <li>Loja de Roupas</li>
            <li>Café Charmoso</li>
            <li>Restaurante Temático</li>
            <li>Barbearia Moderna</li>
            <li>Salão de Beleza</li>
              </ul>
              <div className="right-text"><Link to="/briefing">Ver mais</Link></div>
          </div></div>
        <div className="briefings-card">
        <div className='content'>
          <div className='title'>
            <HiOutlineBuildingOffice2 className='icon' />
            <h3>CORPORATIVOS</h3>
          </div>
            <ul>
            <li>Escritório Colaborativo</li>
            <li>Sala de Reuniões Executiva</li>
            <li>Recepção de Impacto</li>
            <li>Espaço de Descompressão</li>
            <li>Escritório Sustentável</li>
              </ul>
              <div className="right-text"><Link to="/briefing">Ver mais</Link></div>
          </div></div>
      </div>
    </section>
  );
};

export default Briefings;
