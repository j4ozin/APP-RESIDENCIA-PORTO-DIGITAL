import React from 'react';
import './styles.css';
import { FaStar } from "react-icons/fa";
import { imagens } from '../../../../assets/imagens';


const ProfileViewTestimonials: React.FC = () => {
  return (
    <>
      <div className='testimonial-icon-section'>
        <FaStar className="testimonial-icon" />
        <h3>Depoimentos</h3>
      </div>
      <div className="testimonial-container">

        <div className="testimonial-card">
          <div className="author-info">
            <img src={imagens.juliana_mota} alt="Juliana Mota" />
            <div className="author-details">
              <p className="author">Juliana Mota</p>
              <p className="rating">★★★★★</p>
            </div>
          </div>
          <p className="comment">
            Lucas entendeu perfeitamente o que eu buscava para minha casa nova. O resultado superou minhas expectativas!
          </p>
        </div>
        <div className="testimonial-card">
          <div className="author-info">
            <img src={imagens.carla_silva} alt="Carla Silva" />
            <div className="author-details">
              <p className="author">Carla Silva</p>
              <p className="rating">★★★★☆</p>
            </div>
          </div>
          <p className="comment">
            Profissional atencioso e dedicado. Recomendo para quem busca soluções criativas e funcionais!
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileViewTestimonials;