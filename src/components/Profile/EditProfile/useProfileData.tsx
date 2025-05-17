import { useEffect, useState } from 'react';

const BIN_ID = '6828d1788a456b79669fc94c';
const MASTER_KEY = '$2a$10$xA1tJ3v.41uR2JXO2eEnzOvCF6FQhFeqGCW/Fd535UessmSwL0whK';

export interface ProfissionalData {
  nome: string;
  email: string;
  telefone: string;
  cidadeEstado: string;
  profissao: string;
  tipoUsuario: string;
  estiloDesign: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  descricao: string;
  portfolio: string;
  especialidades: string[];
  tecnologias: string[];
  estilos: string[];
}

export function useProfileData() {
  const [data, setData] = useState<ProfissionalData | null>(null);
  const [loading, setLoading] = useState(false);
  const [salvo, setSalvo] = useState(false);

  // Carregar dados iniciais
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
          headers: { 'X-Master-Key': MASTER_KEY }
        });
        const json = await res.json();
        const profissional = json.record.profissionais[0];

        // Se profissional existir, seta, senão um estado padrão vazio
        if (profissional) {
          setData(profissional);
        } else {
          setData({
            nome: '',
            email: '',
            telefone: '',
            cidadeEstado: '',
            profissao: '',
            tipoUsuario: '',
            estiloDesign: '',
            cep: '',
            logradouro: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            descricao: '',
            portfolio: '',
            especialidades: [],
            tecnologias: [],
            estilos: []
          });
        }
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    };

    fetchData();
  }, []);

  // Salvar dados atualizados
  const salvarDados = async (novosDados: ProfissionalData) => {
    setLoading(true);
    setSalvo(false);

    try {
      // Buscar conteúdo completo atual para não sobrescrever dados fora do escopo
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { 'X-Master-Key': MASTER_KEY }
      });
      const json = await res.json();
      const fullContent = json.record;

      // Atualizar só o primeiro profissional
      fullContent.profissionais[0] = {
        ...fullContent.profissionais[0],
        ...novosDados
      };

      // Salvar com PUT
      const saveRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': MASTER_KEY
        },
        body: JSON.stringify(fullContent)
      });

      if (!saveRes.ok) throw new Error('Erro ao salvar');

      setData(novosDados);
      setSalvo(true);
    } catch (err) {
      console.error('Erro ao salvar dados:', err);
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

export default useProfileData;
