import React, { useEffect, useState } from 'react';
import './styles.css';
import { FaTools, FaLaptopCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

// JSONBin credentials
const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ProfileViewDetails: React.FC = () => {
  const [especialidades, setEspecialidades] = useState<string[]>([]);
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [estilos, setEstilos] = useState<string[]>([]);
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
          setEspecialidades(profissional.especialidades || []);
          setTecnologias(profissional.tecnologias || []);
          setEstilos(profissional.estilos || []);
        } else {
          console.warn('Nenhum profissional encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar dados do profissional:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  if (loading) return <p>Carregando dados...</p>;

  return (
    <div className="profile-view-details">
      <div className="profile-section specialties">
        <div className="icon-section">
          <FaTools className="icon" />
          <h3>Especialidades</h3>
        </div>
        <ul>
          {especialidades.length > 0 ? (
            especialidades.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhuma especialidade cadastrada.</li>
          )}
        </ul>
      </div>

      <div className="profile-section technologies">
        <div className="icon-section">
          <FaLaptopCode className="icon" />
          <h3>Tecnologias / Metodologias</h3>
        </div>
        <ul>
          {tecnologias.length > 0 ? (
            tecnologias.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhuma tecnologia cadastrada.</li>
          )}
        </ul>
      </div>

      <div className="profile-section styles">
        <div className="icon-section">
          <IoIosColorPalette className="icon" />
          <h3>Estilos</h3>
        </div>
        <ul>
          {estilos.length > 0 ? (
            estilos.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum estilo cadastrado.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileViewDetails;
