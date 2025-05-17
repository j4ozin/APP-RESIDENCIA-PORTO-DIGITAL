import React from 'react';
import './styles.css';
import SimpleHeader from '../components/SimpleHeader';
import Cadastro from '../components/CadastroForm';

const Login: React.FC = () => {
  return (
    <>
      <header>
        <SimpleHeader />
      </header>
      <main className="cad-log-main">
        <h2>Cadastro</h2>
        <Cadastro />
      </main>
    </>
  );
};

export default Login;
