import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';
import './styles.css';
import { imagens } from '../../../assets/imagens';

const cardData = [
  {
    title: "O erro que compromete 70% dos projetos",
    desc: "Descubra como briefings mal feitos afetam até os melhores arquitetos.",
    img: imagens.erroProjeto
  },
  {
    title: "Cliente confuso, projeto comprometido",
    desc: "Como traduzir ideias vagas em soluções concretas desde o primeiro encontro.",
    img: imagens.clienteConfuso
  },
  {
    title: "Arquitetura não é adivinhação",
    desc: "Um bom briefing elimina suposições e fortalece a criação.",
    img: imagens.arquiteturaNaoAdivinhacao
  },
  {
    title: "Design inteligente começa com perguntas certas",
    desc: "Veja como um processo guiado transforma expectativas em espaço real.",
    img: imagens.designInteligente
  },
  {
    title: "O briefing que salvou um projeto de R$ 500 mil",
    desc: "Um estudo real sobre o poder da clareza no início da obra.",
    img: imagens.briefingSalvador
  },
  {
    title: "Tempo é dinheiro — e o Briffa economiza os dois",
    desc: "Otimize reuniões e reduza retrabalhos com um briefing estruturado.",
    img: imagens.tempoEDinheiro
  },
  {
    title: "Reformas sem surpresas",
    desc: "Evite mudanças de última hora com um plano alinhado desde o início.",
    img: imagens.reformasSemSurpresas
  },
  {
    title: "Briefing não é burocracia — é criatividade com direção",
    desc: "Menos achismo, mais intenção em cada decisão de projeto.",
    img: imagens.criatividadeDirecionada
  }
];

const Hero: React.FC = () => {
  
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // a cada 3 segundos
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};


  return (
    <section id="hero">
      <div className="hero-container">
        <img src={imagens.banner} alt="Banner" className="hero-background" />
        <div className="hero-overlay">
          <h1>Briefings sem ruído. Projetos com mais precisão.</h1>
          <p>O Briffa conecta clientes e arquitetos por meio de briefings inteligentes e estruturados, garantindo clareza desde o início do projeto.</p>
        </div>
      </div>

      <div className="carousel-wrapper">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div className="hero-card" key={index}>
              <img src={card.img} alt={card.title} className="hero-background" />
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
