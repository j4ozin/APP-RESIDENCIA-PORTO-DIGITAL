import React, { useState } from 'react';
import './styles.css';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa';
import { PiEye, PiEyeClosed } from "react-icons/pi";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Digite um e-mail válido');
      return;
    }

    setEmailError('');
    console.log('Formulário enviado com:', email);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="title">E-mail</label>
      <div className="input-wrapper"> 
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {emailError && <span className="error">{emailError}</span>}

      <label htmlFor="password">Senha</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
        />
        {showPassword ? (
          <PiEye color="#4B4B4B" size={24} onClick={() => setShowPassword(false)} className="eye-icon" />
        ) : (
          <PiEyeClosed color="#4B4B4B" size={24} onClick={() => setShowPassword(true)} className="eye-icon" />
        )}
      </div>

      <a href="#" className="forgot-password">Esqueceu a senha?</a>

      <button type="submit">Login</button>
      <p>ou entre com</p>
      <div className="social-login">
        <button type="button" className="social-button google">
          <FaGoogle size={20} color="#DB4437"/><br/>
          <span>Google</span>
        </button>
        <button type="button" className="social-button facebook">
          <FaFacebook size={20} color="#4267B2" /><br/>
          <span>Facebook</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
