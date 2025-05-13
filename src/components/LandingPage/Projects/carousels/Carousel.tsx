import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SimpleCarousel = ({ images }) => {
  const settings = {
    dots: true,
    customPaging: () => <div className="custom-dot">{'>'}</div>,
    appendDots: dots => <div className="custom-dots-wrapper">{dots}</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
