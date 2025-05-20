import React from 'react';
import './styles.css';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { imagens } from '../../assets/imagens';
import ProfileViewProfile from '../../components/Profile/ViewProfile/ProfileViewProfile/ClienteViewProfile';
import ProfileViewDetails from '../../components/Profile/ViewProfile/ProfileViewDetails/viewDetailCliente';
import ProfileEditProjects from '../../components/Profile/EditProfile/ProfileEditProjects';
import ProfileFooter from '../../components/Profile/ProfileFooter';

const ViewCliente: React.FC = () => {
  return (
    <>
      <div className="container container-profile">
        <ProfileHeader profilePic={imagens.cliente} tipoUsuario="cliente" />
        <div className="ver-perfil">
          <ProfileViewProfile />
        </div>
        <div className="ver-detalhes">
          <ProfileViewDetails />
        </div>

        <div className="editar-projetos">
          <ProfileEditProjects />
        </div>

        <div className="profile-footer">
          <ProfileFooter />
        </div>
      </div>
    </>
  );
};
export default ViewCliente;
