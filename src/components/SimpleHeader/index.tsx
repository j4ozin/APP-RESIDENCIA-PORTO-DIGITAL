import React from 'react';
import './styles.css';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Logo from '../Logo';

const SimpleHeader: React.FC = () => {
  return (
    <header className="simple-container">
      <div className="simple-left-col">
        <Logo />
      </div>
      <div className="simple-right-col">
        <a href="/" className="back-link">
          <MdKeyboardDoubleArrowLeft />
          Voltar para o site
        </a>
      </div>
    </header>
  );
};

export default SimpleHeader;
