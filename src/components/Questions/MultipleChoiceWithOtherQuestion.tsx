import React, { useState, useEffect } from 'react';
import './styles.css';

interface MultipleChoiceWithOtherQuestionProps {
  questionText: string;
  options: string[];
  answer: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode[];
}

export default function MultipleChoiceWithOtherQuestion({
  questionText,
  options,
  answer,
  onChange,
  icon = [],
}: MultipleChoiceWithOtherQuestionProps) {
  const [selected, setSelected] = useState('');
  const [otherText, setOtherText] = useState('');

useEffect(() => {
  if (typeof answer === 'string' && answer.trim() !== '' && !options.includes(answer)) {
    setSelected('Outro');
    setOtherText(answer);
  } else {
    setSelected(answer);
    setOtherText('');
  }
}, [answer, options]);


  const handleSelect = (opt: string) => {
    setSelected(opt);
    if (opt !== 'Outro') {
      onChange(opt);
      setOtherText('');
    }
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtherText(value);
    onChange(value);
  };

  return (
    <div className="multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="multiple-choice-options">
        {[...options, 'Outro'].map((opt, index) => (
          <button
            key={index}
            className={`choice-button ${selected === opt ? 'selected' : ''}`}
            onClick={() => handleSelect(opt)}
          >
            {icon[index] && <div className="icon-question">{icon[index]}</div>}
            <div>{opt}</div>
          </button>
        ))}
      </div>
      {selected === 'Outro' && (
        <div className="other-input-container">
          <input
            type="text"
            className="other-input"
            placeholder="Digite sua resposta"
            value={otherText}
            onChange={handleOtherChange}
          />
        </div>
      )}
    </div>
  );
}
