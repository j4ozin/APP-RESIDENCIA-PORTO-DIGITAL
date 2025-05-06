import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'; // Importa seu CSS customizado

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    customPaging: () => (
      <div className="custom-dot">{'>'}</div>
    ),
    appendDots: dots => (
      <div className="custom-dots-wrapper">{dots}</div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // remove setas padrão (opcional)
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-slide"><img src="src\components\LandingPage\Hero\assets\casa_moderna.png" alt="Slide 1" /></div>
      <div className="carousel-slide"><img src="src\components\LandingPage\Hero\assets\predio_corporativo.png" alt="Slide 2" /></div>
      <div className="carousel-slide"><img src="src\components\LandingPage\Hero\assets\design_interiores.png" alt="Slide 3" /></div>
    </Slider>
  );
};

export default SimpleCarousel;
