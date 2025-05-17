import React from 'react';
import './styles.css';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { imagens } from '../../assets/imagens';


const PerfilCliente: React.FC = () => {
  return (
    <div>
    <header>
        <ProfileHeader profilePic={imagens.arquiteto}/>
    </header>
    <div className="perfil-page">
        a
    </div>
    </div>
  );
};

export default PerfilCliente;