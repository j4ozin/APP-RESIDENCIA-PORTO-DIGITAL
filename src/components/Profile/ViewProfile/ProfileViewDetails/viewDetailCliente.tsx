import React, { useEffect, useState } from 'react';
import './styles.css';
import { IoIosColorPalette } from "react-icons/io";

// JSONBin credentials
const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

const ClienteViewDetails: React.FC = () => {
  const [descricao, setDescricao] = useState('');
  const [estilo, setEstilo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: { 'X-Master-Key': MASTER_KEY }
        });

        const data = await res.json();
        const cliente = data?.record?.usuarios?.[0];

        if (cliente) {
          setDescricao(cliente.descricao || '');
          setEstilo(cliente.estiloDesign || '');
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
          <h3>Estilo de Design</h3>
        </div>
        <p>{estilo || 'Não informado.'}</p>
      </div>

      <div className="profile-section descricao">
        <h3>Sobre</h3>
        <p>{descricao || 'Nenhuma descrição cadastrada.'}</p>
      </div>
    </div>
  );
};

export default ClienteViewDetails;