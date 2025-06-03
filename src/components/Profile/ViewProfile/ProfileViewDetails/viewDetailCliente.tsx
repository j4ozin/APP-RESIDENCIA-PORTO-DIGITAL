import React, { useEffect, useState } from 'react';
import './styles.css';
import { IoIosColorPalette, IoIosCheckmarkCircleOutline, IoIosPeople } from 'react-icons/io';
import { projectsCliente } from '../../../../data/projectsCliente';


const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ClienteViewDetails: React.FC = () => {
  const [estilos, setEstilos] = useState<string[]>([]);
  const [interesses, setInteresses] = useState<string[]>([]);
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

        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }

        const data = await res.json();
        const cliente = data?.record?.usuarios?.[0];

        if (cliente) {
          setEstilos(cliente.estilos || []);
          setInteresses(cliente.interesses || []);
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

  // Filtra projetos com status "Concluído" do projectsCliente
  const projetosConcluidos = projectsCliente
    .filter((projeto) => projeto.status === 'Concluído')
    .map((projeto) => projeto.titulo);

  if (loading) return <p>Carregando dados...</p>;

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

      <div className="profile-section specialties">
        <div className="icon-section">
          <IoIosCheckmarkCircleOutline className="icon" />
          <h3>Projetos Finalizados</h3>
        </div>
        <ul>
          {projetosConcluidos.length > 0 ? (
            projetosConcluidos.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum projeto cadastrado.</li>
          )}
        </ul>
      </div>

      <div className="profile-section specialties">
        <div className="icon-section">
          <IoIosPeople className="icon" />
          <h3>Interesses Pessoais</h3>
        </div>
        <ul>
          {interesses.length > 0 ? (
            interesses.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>Nenhum interesse cadastrado.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClienteViewDetails;