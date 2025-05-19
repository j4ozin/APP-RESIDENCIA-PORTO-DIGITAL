import React, { useEffect, useState } from 'react';
import './styles.css';
import { imagens } from '../../../../assets/imagens';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import { IoIosColorPalette } from "react-icons/io";

// Tipagem básica para cliente
type ClienteProfile = {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  descricao: string;
  tipoUsuario: string;
  estiloDesign: string;
};

const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ClienteViewProfile: React.FC = () => {
  const [cliente, setCliente] = useState<ClienteProfile | null>(null);
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

        const data = await res.json();
        const clienteData = data?.record?.usuarios?.[0];

        if (clienteData) {
          setCliente(clienteData);
        } else {
          console.warn('Nenhum cliente encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do cliente:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  if (loading) return <p>Carregando perfil do cliente...</p>;
  if (!cliente) return <p>Perfil do cliente não encontrado.</p>;

  return (
    <div className="view-profile-header">
      <div className="view-profile-pic-container">
        <img src={imagens.cliente} alt={cliente.nome} className="view-profile-pic" />
      </div>
      <div className="view-profile-info">
        <h1>{cliente.nome}</h1>
        <p className="view-profile-title">
          {cliente.cidade}, {cliente.estado} |{' '}
          <span className="view-profile-styles">
            <IoIosColorPalette size="20px" /> {cliente.estiloDesign}
          </span>
        </p>
        <p className="view-profile-description">{cliente.descricao}</p>

        <div className="view-profile-contact">
          <a href={`mailto:${cliente.email}`} className="view-profile-contact-link email">
            <MdOutlineEmail />
            {cliente.email}
          </a>
          <a href={`tel:${cliente.telefone}`} className="view-profile-contact-link phone">
            <FaPhoneAlt />
            {cliente.telefone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClienteViewProfile;
