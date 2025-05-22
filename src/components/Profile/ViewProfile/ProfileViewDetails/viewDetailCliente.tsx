import React, { useEffect, useState } from 'react';
import './styles.css';
import { IoIosPeople } from 'react-icons/io';
import { IoIosColorPalette } from 'react-icons/io';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ClienteViewDetails: React.FC = () => {
  const [estilos, setEstilos] = useState<string[]>([]);
  const [projetos, setProjetos] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: {
            'X-Master-Key': MASTER_KEY,
          },
        });

        const data = await res.json();
        const cliente = data?.record?.usuarios?.[0];

        if (cliente) {
          setEstilos(cliente.estilos || []);
          setProjetos(cliente.projetosFinalizados || []);
          setHobbies(cliente.hobbies || []);
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

  if (loading) return <p>Carregando dados do cliente...</p>;

  return (
    <div className="profile-view-details">
      <div className="profile-section styles">
        <div className="icon-section">
          <IoIosColorPalette className="icon" />
          <h3>Estilos Favoritos</h3>
        </div>
        <ul>
          {estilos.length > 0 ? (
            estilos.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum estilo cadastrado.</li>
          )}
        </ul>
      </div>

      <div className="profile-section projects">
        <div className="icon-section">
          <IoIosCheckmarkCircleOutline className="icon" />
          <h3>Projetos Finalizados</h3>
        </div>
        <ul>
          {projetos.length > 0 ? (
            projetos.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>3 Concluídos</li>
          )}
        </ul>
      </div>

      <div className="profile-section hobbies">
        <div className="icon-section">
          <IoIosPeople className="icon" />
          <h3>Interesses Pessoais</h3>
        </div>
        <ul>
          {hobbies.length > 0 ? (
            hobbies.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum interesse pessoal definido</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClienteViewDetails;
