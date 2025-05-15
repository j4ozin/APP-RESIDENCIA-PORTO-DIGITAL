import React from 'react';
import './styles.css';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


const SimpleHeader: React.FC = () => {
  return (
    <header>
<div className="simple-navbar">
  <div className='simple-logo'>Briffa</div>
  <div><a href="/" className='simple-right-col'><MdKeyboardDoubleArrowLeft /> Voltar para o site</a></div>
</div>
</header>
  );
};

export default SimpleHeader;
