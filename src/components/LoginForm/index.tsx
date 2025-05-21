import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa';
import { PiEye, PiEyeClosed } from "react-icons/pi";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [redirectTo, setRedirectTo] = useState('');
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Digite um e-mail válido');
      return;
    }

    setEmailError('');

    if (email.toLowerCase().includes('profissional')) {
      setRedirectTo('/perfil/profissional/ver');
    } else if (email.toLowerCase().includes('cliente')) {
      setRedirectTo('/perfil/cliente/ver');
    } else {
      alert('Tipo de usuário não identificado no e-mail.');
    }
  };

  // Redireciona automaticamente quando redirectTo for definido
  useEffect(() => {
    if (redirectTo && linkRef.current) {
      linkRef.current.click();
    }
  }, [redirectTo]);

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
      <div className="remember-me-container">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Lembrar de mim</label>
      </div>

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

      {redirectTo && (
        <Link to={redirectTo} ref={linkRef} style={{ display: 'none' }}>
          Redirecionar
        </Link>
      )}
    </form>
  );
};

export default LoginForm;
