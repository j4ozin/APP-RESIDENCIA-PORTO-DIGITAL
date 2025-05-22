import React from 'react';
import './styles.css';
import { FaStar } from "react-icons/fa";
import { imagens } from '../../../../assets/imagens';


const ClienteViewTestimonials: React.FC = () => {
  return (
    <>
      <div className='testimonial-icon-section'>
        <FaStar className="testimonial-icon" />
        <h3>Depoimentos</h3>
      </div>
      <div className="testimonial-container">

        <div className="testimonial-card">
          <div className="author-info">
            <img src={imagens.juliana_mota} alt="Mariana Mota" />
            <div className="author-details">
              <p className="author">Lilian Machado</p>
              <p className="rating">★★★★★</p>
            </div>
          </div>
          <p className="comment">
            Fernanda foi muito prestativa! Entendeu perfeitamente o processo, sempre trazendo soluções criativas e inovadoras!
          </p>
        </div>
        <div className="testimonial-card">
          <div className="author-info">
            <img src={imagens.carla_silva} alt="Carla Silva" />
            <div className="author-details">
              <p className="author">Mariana Ferraz</p>
              <p className="rating">★★★★☆</p>
            </div>
          </div>
          <p className="comment">
            Cliente atenciosa e dedicada. Facilitando o desenvolvimento do projeto.
          </p>
        </div>
      </div>
    </>
  );
};

export default ClienteViewTestimonials;