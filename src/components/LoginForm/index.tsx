import React from 'react';
import './styles.css';
import { Eye } from 'phosphor-react';

const LoginForm: React.FC = () => {
  return (
    <form className="login-form">
      <label htmlFor="email">E-mail</label>
      <div className="input-wrapper"> 
        <input type="email" id="email" />
        <Eye color="#4B4B4B" size={24} />
      </div>

      <label htmlFor="password">Senha</label>
      <div className="input-wrapper">
        <input type="password" id="password" />
        <Eye color="#4B4B4B" size={24} />
      </div>

      <a href="#" className="forgot-password">Esqueceu a senha?</a>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
