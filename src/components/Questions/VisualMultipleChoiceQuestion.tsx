import React, { useState, useEffect } from 'react';
import './styles.css';

export default function VisualMultipleChoiceQuestion({ questionText, options, answer = [], onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (Array.isArray(answer)) {
      setSelectedOptions(answer);
    }
  }, [answer]);

  const toggleOption = (label) => {
    let updated;
    if (selectedOptions.includes(label)) {
      updated = selectedOptions.filter(opt => opt !== label);
    } else {
      updated = [...selectedOptions, label];
    }
    setSelectedOptions(updated);
    onChange(updated);
  };

  return (
    <div className="visual-multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="visual-options-grid">
        {options.map(({ label, imageUrl }, index) => (
          <div
            key={index}
            className={`visual-option ${selectedOptions.includes(label) ? 'selected' : ''}`}
            onClick={() => toggleOption(label)}
          >
            <img src={imageUrl} alt={label} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
