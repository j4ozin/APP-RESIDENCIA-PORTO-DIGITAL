import React from 'react';
import './styles.css';
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";

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
            <li>Projeto arquitetônico personalizado;</li>
            <li>Design de interiores;</li>
            <li>Reformas e ampliações;</li>
            <li>Consultoria de iluminação e paisagismo;</li>
            <li>Regularização de imóveis.</li>
              </ul>
          </div>
        </div>
        <div className="services-card">
        <div className='content'>
          <div className='title'>
            <TbBuildingStore className='icon' />
            <h3>COMERCIAIS</h3></div>
            <ul>
            <li>Projeto de lojas e showrooms;</li>
            <li>Visual merchandising e ambientação;</li>
            <li>Fachadas comerciais e vitrines;</li>
            <li>Estudo de fluxo e experiência do cliente;</li>
            <li>Adequação a normas e licenciamento.</li>
              </ul>
          </div></div>
        <div className="services-card">
        <div className='content'>
          <div className='title'>
            <HiOutlineBuildingOffice2 className='icon' />
            <h3>CORPORATIVOS</h3>
          </div>
            <ul>
              <li>Planejamento de layout para escritórios;</li>
              <li>Design de ambientes colaborativos;</li>
              <li>Projeto de acessibilidade e ergonomia;</li>
              <li>Retrofit de ambientes corporativos;</li>
              <li>Sinalização e identidade visual do espaço.</li></ul>
          </div></div>
      </div>
    </section>
  );
};

export default Services;
