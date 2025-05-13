import React, { useState, useEffect } from 'react';

export default function VisualMultipleChoiceWithOtherQuestion({
  questionText,
  options = [],
  answer = [],
  onChange,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherValue, setOtherValue] = useState('');

useEffect(() => {
  const allOptionLabels = options.map((opt) =>
    typeof opt === 'string' ? opt : opt.label
  );

  const hasOther = answer.find((item) => !allOptionLabels.includes(item));
  const selected = answer.filter((item) => allOptionLabels.includes(item));

  if (hasOther) {
    setSelectedOptions([...selected, 'Outro']);
    setOtherValue(hasOther === 'Outro' ? '' : hasOther); // Se hasOther for "Outro", inicialize vazio
  } else {
    setSelectedOptions(selected);
    setOtherValue('');
  }
}, [answer, options]);


const toggleOption = (label) => {
  let updatedOptions = [...selectedOptions];

  if (selectedOptions.includes(label)) {
    // Desmarcar a opção
    updatedOptions = updatedOptions.filter((o) => o !== label);

    if (label === 'Outro') {
      setOtherValue(''); // Limpar campo "Outro"
    }
  } else {
    // Marcar a opção
    updatedOptions.push(label);

    if (label === 'Outro') {
      setOtherValue(''); // Inicializar vazio ao selecionar "Outro"
    }
  }

  setSelectedOptions(updatedOptions);

  // Enviar as opções e o valor de 'Outro' se houver algo digitado
  if (updatedOptions.includes('Outro') && otherValue.trim()) {
    onChange([...updatedOptions.filter((o) => o !== 'Outro'), otherValue]);
  } else {
    onChange(updatedOptions);
  }
};

const handleOtherChange = (e) => {
  const value = e.target.value;
  setOtherValue(value);

  // Enviar as opções e o valor digitado de 'Outro'
  const updated = [
    ...selectedOptions.filter((o) => o !== 'Outro'),
    ...(value.trim() ? [value] : []),
  ];

  onChange(updated);
};
  return (
    <div className="visual-multiple-choice-other">
      <h3>{questionText}</h3>
      <div className="visual-options-grid">
        {options.map((option) => {
          const label = typeof option === 'string' ? option : option.label;
          const imageUrl = option.imageUrl;

          return (
            <div
              key={label}
              className={`visual-option ${selectedOptions.includes(label) ? 'selected' : ''}`}
              onClick={() => toggleOption(label)}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={label}
                  className="visual-option-image"
                />
              )}
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      <div className="visual-outro-option">
        <div
          className={`visual-option outro-option ${selectedOptions.includes('Outro') ? 'selected' : ''}`}
          onClick={() => toggleOption('Outro')}
        >
          <span>Outro</span>
        </div>

        {selectedOptions.includes('Outro') && (
          <input
            type="text"
            placeholder="Digite sua resposta"
            value={otherValue}
            onChange={handleOtherChange}
            className="other-input"
          />
        )}
      </div>
    </div>
  );
}
