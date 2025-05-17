import React from 'react';
import './styles.css';
import { FaLaptopCode, FaTools } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';
import { ProfissionalData } from '../useProfileData'; // ajuste conforme seu tipo
import estilosDesign from '../../../../data/estilosDesign';

interface ProfileEditDetailsProps {
  profissional: ProfissionalData;
  setProfissional: React.Dispatch<React.SetStateAction<ProfissionalData | null>>;
}

const ProfileEditDetails: React.FC<ProfileEditDetailsProps> = ({ profissional, setProfissional }) => {
  const categories = [
    {
      key: 'especialidades',
      label: 'Especialidades',
      icon: <FaTools className="icon" />,
      state: profissional.especialidades,
      setState: (newVal: string[]) =>
        setProfissional(prev => prev ? { ...prev, especialidades: newVal } : prev),
      placeholder: 'Digite uma especialidade',
    },
    {
      key: 'tecnologias',
      label: 'Tecnologias / Metodologias',
      icon: <FaLaptopCode className="icon" />,
      state: profissional.tecnologias,
      setState: (newVal: string[]) =>
        setProfissional(prev => prev ? { ...prev, tecnologias: newVal } : prev),
      placeholder: 'Digite uma tecnologia',
    },
    {
      key: 'estilos',
      label: 'Estilos',
      icon: <IoIosColorPalette className="icon" />,
      state: profissional.estilos,
      setState: (newVal: string[]) =>
        setProfissional(prev => prev ? { ...prev, estilos: newVal } : prev),
      placeholder: 'Selecione um estilo',
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

    // Se o valor for vazio, não atualiza o estado
    if (value.trim() === '') {
      return;
    }

    updated[index] = value;
    // Filtra entradas vazias antes de atualizar o estado
    const filtered = updated.filter(item => item.trim() !== '');
    setState(filtered);
  };

  const handleDelete = (
    setState: (val: string[]) => void,
    current: string[],
    index: number
  ) => {
    const updated = current.filter((_, i) => i !== index);
    // Filtra entradas vazias após deletar
    const filtered = updated.filter(item => item.trim() !== '');
    setState(filtered);
  };

  const handleAdd = (
    setState: (val: string[]) => void,
    current: string[]
  ) => {
    // Só adiciona se a última entrada não for vazia (opcional, dependendo do comportamento desejado)
    if (current.length > 0 && current[current.length - 1].trim() === '') {
      return;
    }
    setState([...current, '']); // Adiciona uma entrada vazia para edição
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
                  onChange={e =>
                    handleInputChange(e, category.setState, index, category.state)
                  }
                  className="edit-input"
                >
                  <option value="">Selecione um estilo</option>
                  {estilosDesign.map((estilo, i) => {
                    const isSelectedInOther = category.state.some(
                      (selectedEstilo, idx) => selectedEstilo === estilo && idx !== index
                    );
                    return (
                      <option key={i} value={estilo} disabled={isSelectedInOther}>
                        {estilo}</option>
                    );
                  })}
                </select>
              ) : (
                <input
                  type="text"
                  value={item}
                  onChange={e =>
                    handleInputChange(e, category.setState, index, category.state)
                  }
                  placeholder={category.placeholder}
                  className="edit-input"
                />
              )}
              <button
                className="delete-button"
                onClick={() =>
                  handleDelete(category.setState, category.state, index)
                }
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

export default ProfileEditDetails;