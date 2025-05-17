import React, { useEffect, useState } from 'react';
import './styles.css';
import { imagens } from '../../../../assets/imagens';
import { FaBehance, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosColorPalette } from "react-icons/io";

type UserProfile = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  descricao: string;
  profissao?: string;
  tipoUsuario: string;
  estiloDesign: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidadeEstado?: string;
  portfolio?: string;
};

// JSONBin config
const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ProfileViewProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: {
            'X-Master-Key': MASTER_KEY
          }
        });

        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }

        const data = await res.json();
        const profissional = data?.record?.profissionais?.[0];

        if (profissional) {
          setUser(profissional);
        } else {
          console.warn('Nenhum profissional encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do perfil:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  if (loading) return <p>Carregando perfil...</p>;
  if (!user) return <p>Perfil não encontrado.</p>;

  return (
    <div className="view-profile-header">
      <div className="view-profile-pic-container">
        <img src={imagens.arquiteto} alt={user.nome} className="view-profile-pic" />
      </div>
      <div className="view-profile-info">
        <h1>{user.nome}</h1>
        <p className="view-profile-title">
          {user.profissao} | {user.cidade}, {user.estado} |{' '}
          <span className="view-profile-styles">
            <IoIosColorPalette size="20px" /> {user.estiloDesign}
          </span>
        </p>
        <p className="view-profile-description">{user.descricao}</p>

        <div className="view-profile-contact">
          <a href={`mailto:${user.email}`} className="view-profile-contact-link email">
            <MdOutlineEmail />
            {user.email}
          </a>
          <a href={`tel:${user.telefone}`} className="view-profile-contact-link phone">
            <FaPhoneAlt />
            {user.telefone}
          </a>
          <a
            href={user.portfolio || 'https://behance.net'}
            target="_blank"
            rel="noopener noreferrer"
            className="view-profile-contact-link behance"
          >
            <FaBehance />
            <div>Behance</div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-profile-contact-link instagram"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="view-profile-contact-link linkedin"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewProfile;
