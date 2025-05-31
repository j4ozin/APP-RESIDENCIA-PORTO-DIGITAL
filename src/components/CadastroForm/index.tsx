import React, { useState } from 'react';
import './styles.css';

const Cadastro: React.FC = () => {
    const [form, setForm] = useState({
        cep: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        numero: '',
        nome: '',
        email: '',
        cpf: '',
        senha: '',
        telefone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleCepBlur = async () => {
        if (form.cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${form.cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setForm((prev) => ({
                        ...prev,
                        endereco: data.logradouro || '',
                        bairro: data.bairro || '',
                        cidade: data.localidade || '',
                        uf: data.uf || '',
                    }));
                }
            } catch (error) {
                console.error('Erro ao buscar CEP:', error);
            }
        }
    };

    return (
        <div className="cadastro-container">
            <form className="formulario" onSubmit={(e) => e.preventDefault()}>
                <div className="linha">
                    <div className="campo">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" value={form.nome} onChange={handleChange} />
                    </div>
                    <div className="campo">
                        <label htmlFor="cep">CEP</label>
                        <input
                            type="text"
                            id="cep"
                            className="input-cep"
                            value={form.cep}
                            onChange={handleChange}
                            onBlur={handleCepBlur}
                            maxLength={8}
                        />
                    </div>
                    <div className="campo pequeno">
                        <label htmlFor="numero">Número</label>
                        <input type="text" id="numero" value={form.numero} onChange={handleChange} />
                    </div>
                </div>

                <div className="linha">
                    <div className="campo">
                        <label htmlFor="endereco">Logradouro</label>
                        <input type="text" id="endereco" value={form.endereco} onChange={handleChange} />
                    </div>
                    <div className="campo">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" id="bairro" value={form.bairro} onChange={handleChange} />
                    </div>
                </div>

                <div className="linha">
                    <div className="campo">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" id="cidade" value={form.cidade} onChange={handleChange} />
                    </div>
                    <div className="campo">
                        <label htmlFor="uf">UF</label>
                        <input type="text" id="uf" value={form.uf} onChange={handleChange} maxLength={2} />
                    </div>
                </div>

                <div className="linha">
                    <div className="campo">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="campo">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" value={form.cpf} onChange={handleChange} />
                    </div>
                </div>

                <div className="linha">
                    <div className="campo">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" value={form.senha} onChange={handleChange} />
                    </div>
                    <div className="campo">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" value={form.telefone} onChange={handleChange} />
                    </div>
                </div>

                <div className="radio-group">
                    <input type="radio" id="cliente" name="role" value="cliente" hidden />
                    <label htmlFor="cliente">Cliente</label>

                    <input type="radio" id="profissional" name="role" value="profissional" hidden />
                    <label htmlFor="profissional">Profissional</label>
                </div>

                <div className="btn-area">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default Cadastro;
