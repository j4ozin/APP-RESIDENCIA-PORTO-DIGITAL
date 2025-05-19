import { useEffect, useState } from 'react';

const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

export interface ClienteData {
  nome: string;
  email: string;
  telefone: string;
  cidadeEstado: string;
  tipoUsuario: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  descricao: string;
  interesses: string[];
}

export function useClienteData() {
  const [data, setData] = useState<ClienteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [salvo, setSalvo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: { 'X-Master-Key': MASTER_KEY }
        });
        const json = await res.json();
        const cliente = json.record.clientes[0];

        if (cliente) {
          setData(cliente);
        } else {
          setData({
            nome: '',
            email: '',
            telefone: '',
            cidadeEstado: '',
            tipoUsuario: '',
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            descricao: '',
            interesses: []
          });
        }
      } catch (err) {
        console.error('Erro ao carregar dados do cliente:', err);
      }
    };

    fetchData();
  }, []);

  const salvarDados = async (novosDados: ClienteData) => {
    setLoading(true);
    setSalvo(false);

    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': MASTER_KEY }
      });
      const json = await res.json();
      const fullContent = json.record;

      fullContent.clientes[0] = {
        ...fullContent.clientes[0],
        ...novosDados
      };

      const saveRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': MASTER_KEY
        },
        body: JSON.stringify(fullContent)
      });

      if (!saveRes.ok) throw new Error('Erro ao salvar dados');

      setData(novosDados);
      setSalvo(true);
    } catch (err) {
      console.error('Erro ao salvar dados do cliente:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    setData,
    salvarDados,
    loading,
    salvo
  };
}

export default useClienteData;
