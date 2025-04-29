import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">Briffa</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
        <a href="#" className="active">Login</a>
        <div className="espaco-vazio"></div>
      </nav>
    </header>
  );
};

export default Header;
