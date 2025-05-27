import React, { useState } from 'react';
import './styles.css';

const CadastroSimplificado: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="cadastroSimplificado-container">
      <form className="formSimplificado-container" onSubmit={(e) => e.preventDefault()}>
        <div className="inputGroupRowSimplificado">
          <div className="inputGroupSimplificado halfWidthSimplificado">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div className="inputGroupSimplificado halfWidthSimplificado">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div className="inputGroupRowSimplificado">
          <div className="inputGroupSimplificado halfWidthSimplificado">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>
          <div className="inputGroupSimplificado halfWidthSimplificado">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              value={form.confirmarSenha}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="buttonAreaSimplificado">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroSimplificado;
