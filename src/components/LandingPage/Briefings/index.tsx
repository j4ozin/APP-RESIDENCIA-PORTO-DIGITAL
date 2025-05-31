import React from 'react';
import './styles.css';
import { TbBuildingStore } from 'react-icons/tb';
import { HiOutlineBuildingOffice2, HiOutlineHomeModern } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Briefings: React.FC = () => {
  const cards = [
    {
      icon: <HiOutlineHomeModern className="icon" />,
      title: 'RESIDENCIAIS',
      items: [
        { label: 'Casa do Zero', link: '/briefing/casadozero' },
        { label: 'Reforma Total' },
        { label: 'Cozinha dos Sonhos' },
        { label: 'Espaço Kids' },
        { label: 'Home Office Compacto' },
      ],
    },
    {
      icon: <TbBuildingStore className="icon" />,
      title: 'COMERCIAIS',
      items: [
        { label: 'Loja de Roupas' },
        { label: 'Café Charmoso' },
        { label: 'Restaurante Temático' },
        { label: 'Barbearia Moderna' },
        { label: 'Salão de Beleza' },
      ],
    },
    {
      icon: <HiOutlineBuildingOffice2 className="icon" />,
      title: 'CORPORATIVOS',
      items: [
        { label: 'Escritório Colaborativo' },
        { label: 'Sala de Reuniões Executiva' },
        { label: 'Recepção de Impacto' },
        { label: 'Espaço de Descompressão' },
        { label: 'Escritório Sustentável' },
      ],
    },
  ];

  return (
    <section id="briefings" className="section servicos">
      <div className="briefings-cards">
        {cards.map((card, index) => (
          <div className="briefings-card" key={index}>
            <div className="content">
              <div className="title">
                {card.icon}
                <h3>{card.title}</h3>
              </div>
              <ul>
                {card.items.map((item, idx) =>
                  item.link ? (
                    <li key={idx}>
                      <Link to={item.link}>{item.label}</Link>
                    </li>
                  ) : (
                    <li key={idx}>{item.label}</li>
                  )
                )}
              </ul>
              <div className="right-text">
                <Link to="/briefing">Ver mais</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Briefings;
