import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SimpleCarouselProps {
  images: string[];
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    customPaging: () => <div className="custom-dot">&gt;</div>, // Single > for each dot
    appendDots: (dots: React.ReactNode) => <div className="custom-dots-wrapper">{dots}</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Projeto imagem ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;