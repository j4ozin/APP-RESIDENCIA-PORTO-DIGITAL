import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Logo';
import { FaUser, FaPencilAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FiFolder, FiFileText } from "react-icons/fi";

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
    navigate('/login');
  };

  return (
    <header className="profile-container">
      <div className="profile-left-col">
        <Logo />
      </div>

      <nav className="profile-center-col">
        <Link to="/briefing" state={{ tipoUsuario }} className="nav-link">Briefings</Link>
        <Link to="/projetos" state={{ tipoUsuario }} className="nav-link">Projetos</Link>
      </nav>

      <div className="profile-right-col" ref={dropdownRef}>
        <div className="profile-pic-thumb" onClick={() => setOpen(!open)}>
          <img src={profilePic} alt="Perfil" />
        </div>
        {open && (
          <ul className="profile-dropdown-menu">
            {/* Esses links aparecem SEMPRE */}
            <li>
              <Link to={`/perfil/${tipoUsuario}/ver`} onClick={() => setOpen(false)}>
                <FaUser size="16px" /> Ver Perfil
              </Link>
            </li>
            <li>
              <Link to={`/perfil/${tipoUsuario}/editar`} onClick={() => setOpen(false)}>
                <FaPencilAlt size="16px" /> Editar Perfil
              </Link>
            </li>

            {/* Esses links aparecem SÓ em telas pequenas (estilo mobile) */}
            <li className="mobile-only">
              <Link to="/briefing" state={{ tipoUsuario }} onClick={() => setOpen(false)}>
                <FiFileText size="16px" /> Briefings
              </Link>
            </li>
            <li className="mobile-only">
              <Link to="/projetos" state={{ tipoUsuario }} onClick={() => setOpen(false)}>
                <FiFolder size="16px" /> Projetos
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
