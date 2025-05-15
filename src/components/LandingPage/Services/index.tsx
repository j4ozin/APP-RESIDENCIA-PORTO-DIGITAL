import React from 'react';
import './styles.css';
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="services" className="section servicos">

      <div className="services-cards">
        <div className="services-card">
          <div className='content'>
            <div className='title'>
              <HiOutlineHomeModern className='icon' />
              <h3>RESIDENCIAIS</h3></div>
            <ul>
            <li><Link to={'/briefing/casadozero'}><b>Casa do Zero:</b> Projeto completo para construção de uma casa nova.</Link></li>
            <li><b>Reforma Total:</b> Renovação completa de uma residência existente.</li>
            <li><b>Cozinha dos Sonhos:</b> Design e funcionalidade para cozinhas residenciais.</li>
            <li><b>Espaço Kids:</b> Ambientes planejados para crianças (quartos ou brinquedotecas).</li>
            <li><b>Home Office Compacto:</b> Escritórios residenciais otimizados para trabalho remoto.</li>
              </ul>
              <div className="right-text">Ver mais</div>
          </div>
        </div>
        <div className="services-card">
        <div className='content'>
          <div className='title'>
            <TbBuildingStore className='icon' />
            <h3>COMERCIAIS</h3></div>
            <ul>
            <li><b>Loja de Roupas:</b> Layout e design para varejo de moda.</li>
            <li><b>Café Charmoso:</b> Espaços para cafeterias e padarias.</li>
            <li><b>Restaurante Temático:</b> Ambientes para experiências gastronômicas únicas.</li>
            <li><b>Barbearia Moderna:</b> Design para barbearias ou salões masculinos.</li>
            <li><b>Salão de Beleza:</b> Espaços para estética e cuidados pessoais.</li>
              </ul>
              <div className="right-text">Ver mais</div>
          </div></div>
        <div className="services-card">
        <div className='content'>
          <div className='title'>
            <HiOutlineBuildingOffice2 className='icon' />
            <h3>CORPORATIVOS</h3>
          </div>
            <ul>
            <li><b>Escritório Colaborativo:</b> Ambientes para trabalho em equipe e inovação.</li>
            <li><b>Sala de Reuniões Executiva:</b> Espaços formais para reuniões de alto nível.</li>
            <li><b>Recepção de Impacto:</b> Design de entradas corporativas para causar boa impressão.</li>
            <li><b>Espaço de Descompressão:</b> Áreas de descanso para funcionários.</li>
            <li><b>Escritório Sustentável:</b> Projetos com foco em eficiência energética e materiais ecológicos.</li>
              </ul>
              <div className="right-text">Ver mais</div>
          </div></div>
      </div>
    </section>
  );
};

export default Services;
