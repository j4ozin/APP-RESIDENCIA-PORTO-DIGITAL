import React from 'react';
import './styles.css';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { imagens } from '../../assets/imagens';
import ProfileViewProfile from '../../components/Profile/ViewProfile/ProfileViewProfile';
import ProfileViewDetails from '../../components/Profile/ViewProfile/ProfileViewDetails';
import ProfileViewProjects from '../../components/Profile/ViewProfile/ProfileViewProjects';
import ProfileViewTestimonials from '../../components/Profile/ViewProfile/ProfileViewTestimonials';
import ProfileFooter from '../../components/Profile/ProfileFooter';

const ViewProfissional: React.FC = () => {
  return (
    <>
      <div className="container container-profile">
        <ProfileHeader profilePic={imagens.arquiteto} tipoUsuario="profissional" />
        <div className="ver-perfil">
          <ProfileViewProfile />
        </div>
        <div className="ver-detalhes">
          <ProfileViewDetails />
        </div>

        <div className="ver-projetos">
          <ProfileViewProjects />
        </div>

        <div className="ver-depoimentos">
          <ProfileViewTestimonials />
        </div>

        <div className="profile-footer">
          <ProfileFooter />
        </div>
      </div>
    </>
  );
};

export default ViewProfissional;
