import React from 'react';
import './styles.css';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import SimpleHeader from '../components/SimpleHeader';

const Login: React.FC = () => {
  return (
    <>
      <header>
        <SimpleHeader />
      </header>
      <main className="cad-log-main">
        <h2>Login</h2>
        <p className='subtext'>
          Não tem uma conta? <Link to="/cadastro">Crie uma.</Link>
        </p>
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
