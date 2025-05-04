import React from 'react';
import './styles.css';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <main className="login-main">
      <Link to="/"><h1>Briffa</h1></Link>
        <p className='subtext'>
          Não tem uma conta? <Link to="/cadastro">Crie uma.</Link>
        </p>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
