import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header className="navbar">
  <div className='colone'>
  <Logo />
  </div>
  <div className="nav-links">
    <a href="#hero" className={activeSection === "hero" ? "active" : ""}>Home</a>
    <a href="#about" className={activeSection === "about" ? "active" : ""}>Sobre</a>
    <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projetos</a>
    <a href="#services" className={activeSection === "services" ? "active" : ""}>Serviços</a>
    <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contato</a>
  </div>
  <div className="colthree"><Link to= {'/login'}>Login</Link></div>
</header>

  );
};

export default Header;
