import React from 'react';
import './styles.css';

const Header: React.FC = ({ activeSection }) => {
  return (
<div className="navbar">
  <div className="logo">Briffa</div>
  <div className="nav-links">
    <a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a>
    <a href="#about" className={activeSection === "about" ? "active" : ""}>Sobre</a>
    <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projetos</a>
    <a href="#services" className={activeSection === "services" ? "active" : ""}>Serviços</a>
    <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contato</a>
  </div>
  <div className="colthree"><a href="/login">Login</a></div>
</div>
  );
};

export default Header;
