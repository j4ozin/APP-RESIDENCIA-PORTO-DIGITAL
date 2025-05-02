import React from 'react';
import './LoginPageStyle.css';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LandingPage: React.FC = () => {
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

export default LandingPage;