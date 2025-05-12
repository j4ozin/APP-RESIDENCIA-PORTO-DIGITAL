import { useState } from 'react';
import './styles.css';

export default function AddressForm({ questionText, answer, onChange }) {
  const [address, setAddress] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCepChange = async (cep) => {
    const cleanedCep = cep.replace(/\D/g, '');
    setAddress({ ...address, cep: cleanedCep });
    setError('');

    if (cleanedCep.length === 8) {
      setLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setError('CEP não encontrado');
          setAddress({
            ...address,
            cep: cleanedCep,
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
          });
        } else {
          setAddress({
            ...address,
            cep: cleanedCep,
            logradouro: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            uf: data.uf || ''
          });
        }
      } catch (err) {
        setError('Erro ao consultar o CEP');
      } finally {
        setLoading(false);
      }
    }

    onChange({ ...address, cep: cleanedCep });
  };

  const handleInputChange = (field, value) => {
    const updatedAddress = { ...address, [field]: value };
    setAddress(updatedAddress);
    onChange(updatedAddress);
  };

  return (
    <div className="address-wrapper">
      <div className="address-content">
        <h3>{questionText}</h3>
        <div className="address-fields">
          <div className="address-field address-field-cep">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              placeholder="Digite o CEP"
              value={address.cep}
              onChange={(e) => handleCepChange(e.target.value)}
              maxLength={8}
              disabled={loading}
            />
            {loading && <p className="address-loading">Buscando...</p>}
            {error && <p className="address-error">{error}</p>}
          </div>

          <div className="address-field address-field-logradouro">
            <label htmlFor="logradouro">Logradouro</label>
            <input
              id="logradouro"
              type="text"
              value={address.logradouro}
              onChange={(e) => handleInputChange('logradouro', e.target.value)}
            />
          </div>

          <div className="address-field address-field-numero">
            <label htmlFor="numero">Número</label>
            <input
              id="numero"
              type="text"
              value={address.numero}
              onChange={(e) => handleInputChange('numero', e.target.value)}
            />
          </div>

          <div className="address-field address-field-complemento">
            <label htmlFor="complemento">Complemento</label>
            <input
              id="complemento"
              type="text"
              value={address.complemento}
              onChange={(e) => handleInputChange('complemento', e.target.value)}
            />
          </div>

          <div className="address-field address-field-bairro">
            <label htmlFor="bairro">Bairro</label>
            <input
              id="bairro"
              type="text"
              value={address.bairro}
              onChange={(e) => handleInputChange('bairro', e.target.value)}
            />
          </div>

          <div className="address-field address-field-cidade">
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              value={address.cidade}
              onChange={(e) => handleInputChange('cidade', e.target.value)}
            />
          </div>

          <div className="address-field address-field-uf">
            <label htmlFor="uf">UF</label>
            <input
              id="uf"
              type="text"
              value={address.uf}
              onChange={(e) => handleInputChange('uf', e.target.value)}
              maxLength={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}