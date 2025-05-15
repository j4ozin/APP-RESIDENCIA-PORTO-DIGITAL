import { useState, useEffect } from 'react';
import './styles.css';

interface VisualMultipleChoiceQuestionProps {
  questionText: string;
  options?: Array<string | { label: string; imageUrl?: string }>;
  answer?: string[];
  onChange: (updated: string[]) => void;
}

export default function VisualMultipleChoiceQuestion({ questionText, options, answer = [], onChange }: VisualMultipleChoiceQuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    if (Array.isArray(answer)) {
      setSelectedOptions(answer);
    }
  }, [answer]);

  const toggleOption = (label: string) => {
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
        {options?.map((option, index) => {
          const label = typeof option === 'string' ? option : option.label;
          const imageUrl = typeof option === 'string' ? undefined : option.imageUrl;

          return (
            <div
              key={index}
              className={`visual-option ${selectedOptions.includes(label) ? 'selected' : ''}`}
              onClick={() => toggleOption(label)}
            >
              {imageUrl && <img src={imageUrl} alt={label} />}
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
