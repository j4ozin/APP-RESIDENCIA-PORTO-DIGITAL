import React from 'react';
import { imagens } from '../../../../assets/imagens';
import { FaRegEdit } from 'react-icons/fa';
import { ClienteData } from '../useClienteData';

interface ClienteEditProfileProps {
  cliente: ClienteData;
  setCliente: React.Dispatch<React.SetStateAction<ClienteData | null>>;
  salvarDados: (data: ClienteData) => Promise<void>;
  loading: boolean;
  salvo: boolean;
}

const ClienteEditProfile: React.FC<ClienteEditProfileProps> = ({
  cliente,
  setCliente,
  salvarDados,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCliente((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (cliente) {
      salvarDados(cliente);
    }
  };

  if (!cliente) return <div>Carregando...</div>;

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-row-a">
        <div className="edit-profile-col-a">
          <div className="edit-profile-img-txt">
            <img
              src={imagens.cliente}
              alt="Perfil Cliente"
              className="edit-profile-image"
            />
            <div className="edit-img-text">
              <div>
                <FaRegEdit size={20} className="edit-profile-icon" />
              </div>
              <div>Editar Foto</div>
            </div>
          </div>
        </div>

        <div className="edit-profile-col-b">
          <form id="edit-profile-form" onSubmit={handleSave}>
            <div className="profile-form-grid">
              <div className="profile-form-group">
                <label>Nome completo</label>
                <input name="nome" value={cliente.nome} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>E-mail</label>
                <input
                  name="email"
                  value={cliente.email}
                  disabled
                  className="disabled"
                />
              </div>

              <div className="profile-form-group">
                <label>Telefone</label>
                <input name="telefone" value={cliente.telefone} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>CEP</label>
                <input name="cep" value={cliente.cep} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>Logradouro</label>
                <input
                  name="logradouro"
                  value={cliente.logradouro}
                  onChange={handleChange}
                />
              </div>

              <div className="profile-form-group">
                <label>Número</label>
                <input name="numero" value={cliente.numero} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>Bairro</label>
                <input name="bairro" value={cliente.bairro} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>Cidade</label>
                <input name="cidade" value={cliente.cidade} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>Estado</label>
                <input name="estado" value={cliente.estado} onChange={handleChange} />
              </div>

              <div className="profile-form-group">
                <label>Tipo de usuário</label>
                <select name="tipoUsuario" value={cliente.tipoUsuario} disabled>
                  <option value="Cliente">Cliente</option>
                </select>
              </div>

              <div className="profile-form-group">
                <label>Descrição</label>
                <textarea
                  name="descricao"
                  value={cliente.descricao}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClienteEditProfile;
