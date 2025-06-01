import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Logo';
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";


interface ProfileHeaderProps {
  profilePic: string;
  tipoUsuario: 'cliente' | 'profissional';
}


const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profilePic, tipoUsuario }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logout...");
    // Aqui você pode limpar o localStorage, tokens, etc.
    navigate('/login'); // ou redirecionar para a tela inicial
  };

  return (
    <header className="profile-container">
      <div className="profile-left-col">
        <Logo />
      </div>
      <div className="profile-center-col">
        <Link to="/briefing" state={{ tipoUsuario }}>Briefings</Link>
        <Link to="/projetos" state={{ tipoUsuario }}>Projetos</Link>
      </div>
      <div className="profile-right-col" ref={dropdownRef}>
        <div className="profile-pic-thumb" onClick={() => setOpen(!open)}>
          <img src={profilePic} alt="Perfil" />
        </div>
        {open && (
          <ul className="profile-dropdown-menu">
      <li>
        <Link to={`/perfil/${tipoUsuario}/ver`}>
          <FaUser size="16px" /> Ver Perfil
        </Link>
      </li>
      <li>
        <Link to={`/perfil/${tipoUsuario}/editar`}>
          <FaPencilAlt size="16px" /> Editar Perfil
        </Link>
      </li>
      <li onClick={handleLogout}>
        <ImExit size="16px" /> Sair
      </li>
    </ul>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
