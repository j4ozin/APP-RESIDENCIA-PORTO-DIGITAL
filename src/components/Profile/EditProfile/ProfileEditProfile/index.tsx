import React from 'react';
import './styles.css';
import { imagens } from '../../../../assets/imagens';
import { FaRegEdit } from "react-icons/fa";
import { ProfissionalData } from '../useProfileData';


interface ProfileEditProfileProps {
  profissional: ProfissionalData;
  setProfissional: React.Dispatch<React.SetStateAction<ProfissionalData | null>>;
  salvarDados: (data: ProfissionalData) => Promise<void>;
  loading: boolean;
  salvo: boolean;
}

const ProfileEditProfile: React.FC<ProfileEditProfileProps> = ({
  profissional,
  setProfissional,
  salvarDados
}) => {

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfissional(prev => prev ? { ...prev, [name]: value } : prev);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (profissional) {
      salvarDados(profissional);
    }
  };

  if (!profissional) return <div>Carregando...</div>;

  return (
    <>
      <div className="edit-profile-container">
        <div className="edit-profile-row-a">
          <div className="edit-profile-col-a">
            <div className="edit-profile-img-txt">
              <img
                src={imagens.arquiteto}
                alt="Perfil Arquiteto"
                className="edit-profile-image"
              />
              <div className='edit-img-text'>
                <div>
                  <FaRegEdit size={20} className="edit-profile-icon" />
                </div>
                <div>
                  Editar Foto
                </div>
              </div>
            </div>

          </div>
          <div className="edit-profile-col-b">
            <form id="edit-profile-form" onSubmit={handleSave}>
              <div className="profile-form-grid">

                {/* Dados pessoais */}
                <div className="profile-form-group">
                  <label>Nome completo</label>
                  <input name="nome" value={profissional.nome} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>E-mail</label>
                  <input name="email" value={profissional.email} disabled className="disabled" />
                </div>

                <div className="profile-form-group">
                  <label>Telefone</label>
                  <input name="telefone" value={profissional.telefone} onChange={handleChange} />
                </div>

                {/* Endereço detalhado */}
                <div className="profile-form-group">
                  <label>CEP</label>
                  <input name="cep" value={profissional.cep} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Logradouro</label>
                  <input name="logradouro" value={profissional.logradouro} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Número</label>
                  <input name="numero" value={profissional.numero} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Bairro</label>
                  <input name="bairro" value={profissional.bairro} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Cidade</label>
                  <input name="cidade" value={profissional.cidade} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Estado</label>
                  <input name="estado" value={profissional.estado} onChange={handleChange} />
                </div>

                {/* Dados profissionais */}
                <div className="profile-form-group">
                  <label>Profissão</label>
                  <input name="profissao" value={profissional.profissao} onChange={handleChange} />
                </div>

                <div className="profile-form-group">
                  <label>Tipo de usuário</label>
                  <select name="tipoUsuario" value={profissional.tipoUsuario} disabled onChange={handleChange}>
                    <option value="Profissional">Profissional</option>
                    <option value="Cliente">Cliente</option>
                  </select>
                </div>

                <div className="profile-form-group">
  <label>Estilo de design preferido</label>
  <select name="estiloDesign" value={profissional.estiloDesign} onChange={handleChange}>
    <option value="">Selecione um estilo</option>
    {profissional.estilos?.map((estilo: string, index: number) => (
      <option key={index} value={estilo}>{estilo}</option>
    ))}
  </select>
</div>



                <div className="profile-form-group">
                  <label>Descrição profissional</label>
                  <textarea name="descricao" value={profissional.descricao} onChange={handleChange} rows={3} />
                </div>

                <div className="profile-form-group">
                  <label>Site ou portfólio</label>
                  <input name="portfolio" value={profissional.portfolio} onChange={handleChange} />
                </div>

              </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditProfile;
