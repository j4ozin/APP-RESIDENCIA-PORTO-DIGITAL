import React, { useState, useEffect } from 'react';

interface VisualMultipleChoiceWithOtherQuestionProps {
  questionText: string;
  options?: Array<string | { label: string; imageUrl?: string }>;
  answer?: string[];
  onChange: (updatedAnswer: string[]) => void;
}

export default function VisualMultipleChoiceWithOtherQuestion({
  questionText,
  options = [],
  answer = [],
  onChange,
}: VisualMultipleChoiceWithOtherQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [otherValue, setOtherValue] = useState('');

  useEffect(() => {
    console.log('useEffect triggered - Answer:', answer, 'Options:', options);
    if (Array.isArray(answer)) {
      const validOptions = options.map((opt) => (typeof opt === 'string' ? opt : opt.label));
      const selected = answer.filter((ans) => validOptions.includes(ans) || ans === 'Outro');
      
      // Só atualiza se não houver digitação ativa
      if (!otherValue || !selectedOptions.includes('Outro')) {
        setSelectedOptions(selected);
      }

      const otherAnswer = answer.find((ans) => !validOptions.includes(ans) && ans !== 'Outro');
      if (!otherValue || !selectedOptions.includes('Outro')) {
        setOtherValue(otherAnswer || '');
      }
      console.log('useEffect - Answer:', answer, 'Selected:', selected, 'Other:', otherAnswer);
    } else {
      setSelectedOptions([]);
      setOtherValue('');
      console.log('useEffect - Answer is not an array:', answer);
    }
  }, [answer, options, otherValue, selectedOptions]);

  const toggleOption = (label: string) => {
    console.log('toggleOption - Label:', label);
    let updatedOptions = [...selectedOptions];

    if (selectedOptions.includes(label)) {
      updatedOptions = updatedOptions.filter((o) => o !== label);
      if (label === 'Outro') {
        setOtherValue('');
      }
    } else {
      updatedOptions.push(label);
    }

    setSelectedOptions(updatedOptions);

    const finalAnswer = updatedOptions.includes('Outro') && otherValue.trim()
      ? [...updatedOptions.filter((o) => o !== 'Outro'), otherValue]
      : updatedOptions;

    console.log('toggleOption - Updated Options:', updatedOptions, 'Final Answer:', finalAnswer);
    onChange(finalAnswer);
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log('handleOtherChange - Input value:', value);
    setOtherValue(value);

    const finalAnswer = [
      ...selectedOptions.filter((o) => o !== 'Outro'),
      ...(value.trim() ? [value] : []),
    ];

    console.log('handleOtherChange - Final Answer:', finalAnswer);
    onChange(finalAnswer);
  };

  return (
    <div className="visual-multiple-choice-other">
      <h3>{questionText}</h3>
      <div className="visual-options-grid">
        {options.map((option) => {
          const label = typeof option === 'string' ? option : option.label;
          const imageUrl = typeof option === 'object' && 'imageUrl' in option ? option.imageUrl : undefined;

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
            onChange={(e) => {
              console.log('Input onChange - Raw value:', e.target.value);
              handleOtherChange(e);
            }}
            onFocus={() => console.log('Input focused')}
            onBlur={() => console.log('Input blurred')}
            className="other-input"
          />
        )}
      </div>
    </div>
  );
}