import React from 'react';
import './styles.css';
import { IoIosColorPalette, IoIosCheckmarkCircleOutline, IoIosPeople } from 'react-icons/io';
import { ClienteData } from '../useClienteData';
import estilosDesign from '../../../../data/estilosDesign';

interface ProfileEditDetailsProps {
  cliente: ClienteData;
  setCliente: React.Dispatch<React.SetStateAction<ClienteData | null>>;
}

const ProfileEditDetailsCliente: React.FC<ProfileEditDetailsProps> = ({ cliente, setCliente }) => {
  // Protege os campos de serem undefined
  const estilos = cliente.estilos || [];
  const projetosFinalizados = cliente.projetosFinalizados || [];
  const hobbies = cliente.hobbies || [];

  const categories = [
    {
      key: 'estilos',
      label: 'Estilos Favoritos',
      icon: <IoIosColorPalette className="icon" />,
      state: estilos,
      setState: (newVal: string[]) =>
        setCliente(prev => prev ? { ...prev, estilos: newVal } : prev),
      placeholder: 'Selecione um estilo',
    },
    {
      key: 'projetosFinalizados',
      label: 'Projetos Finalizados',
      icon: <IoIosCheckmarkCircleOutline className="icon" />,
      state: projetosFinalizados,
      setState: (newVal: string[]) =>
        setCliente(prev => prev ? { ...prev, projetosFinalizados: newVal } : prev),
      placeholder: 'Digite um projeto concluído',
    },
    {
      key: 'hobbies',
      label: 'Interesses Pessoais',
      icon: <IoIosPeople className="icon" />,
      state: hobbies,
      setState: (newVal: string[]) =>
        setCliente(prev => prev ? { ...prev, hobbies: newVal } : prev),
      placeholder: 'Digite um interesse pessoal',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setState: (val: string[]) => void,
    index: number,
    current: string[]
  ) => {
    const value = e.target.value;
    const updated = [...current];
    if (value.trim() === '') return;
    updated[index] = value;
    const filtered = updated.filter(item => item.trim() !== '');
    setState(filtered);
  };

  const handleDelete = (
    setState: (val: string[]) => void,
    current: string[],
    index: number
  ) => {
    const updated = current.filter((_, i) => i !== index);
    setState(updated.filter(item => item.trim() !== ''));
  };

  const handleAdd = (
    setState: (val: string[]) => void,
    current: string[]
  ) => {
    if (current.length > 0 && current[current.length - 1].trim() === '') return;
    setState([...current, '']);
  };

  return (
    <div className="profile-edit-section">
      {categories.map(category => (
        <div className="profile-edit-category" key={category.key}>
          <div className="icon-section">
            {category.icon}
            <h3>{category.label}</h3>
          </div>

          {category.state.map((item, index) => (
            <div className="edit-details-input-container" key={index}>
              {category.key === 'estilos' ? (
                <select
                  value={item}
                  onChange={e => handleInputChange(e, category.setState, index, category.state)}
                  className="edit-input"
                >
                  <option value="">Selecione um estilo</option>
                  {estilosDesign.map((estilo, i) => {
                    const isSelectedInOther = category.state.some(
                      (selected, idx) => selected === estilo && idx !== index
                    );
                    return (
                      <option key={i} value={estilo} disabled={isSelectedInOther}>
                        {estilo}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input
                  type="text"
                  value={item}
                  onChange={e => handleInputChange(e, category.setState, index, category.state)}
                  placeholder={category.placeholder}
                  className="edit-input"
                />
              )}
              <button
                className="delete-button"
                onClick={() => handleDelete(category.setState, category.state, index)}
              >
                ×
              </button>
            </div>
          ))}

          <button
            className="add-button"
            onClick={() => handleAdd(category.setState, category.state)}
            disabled={category.state.length > 0 && category.state[category.state.length - 1].trim() === ''}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfileEditDetailsCliente;
