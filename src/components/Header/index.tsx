import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-left-col">
        <Logo />
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={handleLinkClick}>
          Home
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleLinkClick}>
          Sobre
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleLinkClick}>
          Projetos
        </a>
        <a href="#briefings" className={activeSection === 'briefings' ? 'active' : ''} onClick={handleLinkClick}>
          Briefings
        </a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick}>
          Contato
        </a>
        <Link
          to="/login"
          className={`login-link mobile-only ${menuOpen ? '' : 'hidden'}`}
          onClick={handleLinkClick}
        >
          Login
        </Link>
      </nav>

      <div className="header-right-col">
        <button className="menu-toggle" aria-label="Abrir menu" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <Link to="/login" className="login-link" onClick={handleLinkClick}>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
