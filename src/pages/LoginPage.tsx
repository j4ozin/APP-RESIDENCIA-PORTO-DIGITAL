import React from 'react';
import './styles.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <Header />
      <main className="login-main">
        <h1>Briffa</h1>
        <p className='subtext'>
          Não tem uma conta? <a href="#">Crie uma conta.</a>
        </p>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
