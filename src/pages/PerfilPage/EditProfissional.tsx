import React, { useState } from 'react';
import { imagens } from '../../assets/imagens';
import ProfileEditDetails from '../../components/Profile/EditProfile/ProfileEditDetails';
import ProfileEditPreferences from '../../components/Profile/EditProfile/ProfileEditPreferences';
import ProfileEditProfile from '../../components/Profile/EditProfile/ProfileEditProfile';
import ProfileEditProjects from '../../components/Profile/EditProfile/ProfileEditProjects';
import { SaveButton } from '../../components/Profile/EditProfile/SaveButton';
import useProfileData from '../../components/Profile/EditProfile/useProfileData';
import ProfileFooter from '../../components/Profile/ProfileFooter';
import ProfileHeader from '../../components/Profile/ProfileHeader';

const PerfilProfissional: React.FC = () => {
  const { data: profissional, setData: setProfissional, salvarDados, loading, salvo } = useProfileData();
  const [error, setError] = useState<string | null>(null); // Estado para erro

  if (!profissional) return <div>Carregando...</div>;

  const handleSave = async () => {
    setError(null);

    // Filtrar entradas vazias
    const cleanedData = {
      ...profissional,
      especialidades: profissional.especialidades.filter(item => item.trim() !== ''),
      tecnologias: profissional.tecnologias.filter(item => item.trim() !== ''),
      estilos: profissional.estilos.filter(item => item.trim() !== ''),
    };

    // Validação: Verificar se todos os arrays têm pelo menos uma entrada válida
    if (
      cleanedData.especialidades.length === 0 &&
      cleanedData.tecnologias.length === 0 &&
      cleanedData.estilos.length === 0
    ) {
      setError('Preencha pelo menos uma especialidade, tecnologia ou estilo.');
      return;
    }

    try {
      // Atualizar o estado com dados limpos
      setProfissional(cleanedData);

      // Chamar salvarDados com os dados limpos
      await salvarDados(cleanedData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Erro ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <>
      <div className="container container-profile">
        <ProfileHeader profilePic={imagens.arquiteto} tipoUsuario="profissional" />
        <div className="editar-perfil">
          <ProfileEditProfile
            profissional={profissional}
            setProfissional={setProfissional}
            salvarDados={salvarDados}
            loading={loading}
            salvo={salvo}
          />
        </div>
        <div className="editar-preferencias">
          <ProfileEditPreferences />
        </div>
        <div className="editar-projetos">
          <ProfileEditProjects />
        </div>
        <div className="editar-detalhes">
          <ProfileEditDetails
            profissional={profissional}
            setProfissional={setProfissional}
          />
        </div>
        <div>
          <SaveButton
            loading={loading}
            salvo={salvo}
            error={error}
            onSave={handleSave}
          />
        </div>
        <div className="profile-footer">
          <ProfileFooter />
        </div>
      </div>
    </>
  );
};

export default PerfilProfissional;