import React, { useState } from 'react';
import { imagens } from '../../assets/imagens';
import { SaveButton } from '../../components/Profile/EditProfile/SaveButton';
import ProfileFooter from '../../components/Profile/ProfileFooter';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import useClienteData from '../../components/Profile/EditProfile/useClienteData';
import ClienteEditProfile from '../../components/Profile/EditProfile/ProfileEditProfile/ClienteEditProfile';
import ProfileEditDetailsCliente from '../../components/Profile/EditProfile/ProfileEditDetails/ProfileEditDetailsCliente';
import ProfileEditPreferences from '../../components/Profile/EditProfile/ProfileEditPreferences';


const EditCliente: React.FC = () => {
  const {
    data: cliente,
    setData: setCliente,
    salvarDados,
    loading,
    salvo
  } = useClienteData();

  const [error, setError] = useState<string | null>(null);

  if (!cliente) return <div>Carregando...</div>;

  const handleSave = async () => {
    setError(null);

    const cleanedData = {
      ...cliente,
      estilos: cliente.estilos?.filter((item: string) => item.trim() !== '') || [],
      projetosFinalizados: cliente.projetosFinalizados?.filter((item: string) => item.trim() !== '') || [],
      hobbies: cliente.hobbies?.filter((item: string) => item.trim() !== '') || []
    };

    if (cleanedData.hobbies.length === 0) {
      setError('Preencha pelo menos um interesse.');
      return;
    }

    try {
      setCliente(cleanedData);
      await salvarDados(cleanedData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Erro ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <div className="container container-profile">
      <ProfileHeader profilePic={imagens.cliente} tipoUsuario="cliente" />

      <div className="editar-perfil">
        <ClienteEditProfile
          cliente={cliente}
          setCliente={setCliente}
          salvarDados={salvarDados}
          loading={loading}
          salvo={salvo}
        />
      </div>

      <div className="editar-preferencias">
        <ProfileEditPreferences />
      </div>

      <div className="editar-detalhes">
        <ProfileEditDetailsCliente
          cliente={cliente}
          setCliente={setCliente}
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
  );
};

export default EditCliente;
