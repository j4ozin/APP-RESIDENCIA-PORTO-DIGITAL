import React from 'react';
import '.src/components/CadastroForm/styles.css';

const CadastroClientes: React.FC = () => {
  return (
    <div className="cadastro-container">
      <header className="topo">
        <h1>Briffa</h1>
        <a href="#" className="voltar">⟪ Voltar para o site</a>
      </header>

      <h2 className="titulo">Cadastro de Clientes</h2>

      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        <div className="linha">
          <div className="campo">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
          </div>
          <div className="campo">
            <label htmlFor="endereco">Endereço</label>
            <input type="text" id="endereco" />
          </div>
          <div className="campo pequeno">
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" />
          </div>
        </div>

        <div className="linha">
          <div className="campo">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className="campo">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </div>
        </div>

        <div className="linha">
          <div className="campo">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" />
          </div>
          <div className="campo">
            <label htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" />
          </div>
        </div>

        <div className="btn-area">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroClientes;
