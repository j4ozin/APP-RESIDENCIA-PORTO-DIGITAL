import React from 'react';
import './styles.css';
import { FaCube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileFooter: React.FC = () => {
  
  return (
    <footer className="profile-footer">
      <div className="profile-footer-content">
        <div className="profile-footer-copyright">
          <FaCube /> &copy; {new Date().getFullYear()} Briffa. Todos os direitos reservados.
        </div>
        <div className="profile-footer-links">
          <a href="/termos" className="profile-footer-link">Termos de Uso</a>
          <a href="/privacidade" className="profile-footer-link">Política de Privacidade</a>
          <Link to="#contact" className="profile-footer-link">Fale Conosco</Link>
          </div>
      </div>
    </footer>
  );
};

export default ProfileFooter;
