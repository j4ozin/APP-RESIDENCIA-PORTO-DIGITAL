import React from 'react';
import './CadastroPageStyle.css';
import Cadastro from '../components/CadastroForm'; 
import SimpleHeader from '../components/SimpleHeader';


const CadastroPage: React.FC = () => {
  return (
    <div className="cadastro-page">
        <SimpleHeader />
        <Cadastro />
    </div>
  );
};

export default CadastroPage;