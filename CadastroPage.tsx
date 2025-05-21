import React from 'react';
import './CadastroPageStyle.css';
import CadastroClientes from '../components/CadastroForm'; 


const CadastroPage: React.FC = () => {
  return (
    <div className="cadastro-page">
      <CadastroClientes /> {/* Exibe o componente CadastroClientes */}
    </div>
  );
};

export default CadastroPage;