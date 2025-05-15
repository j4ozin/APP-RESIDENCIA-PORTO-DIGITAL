interface MultipleChoiceQuestionProps {
  questionText: string;
  options: string[];
  answer: string;
  onChange: (selectedOption: string) => void;
  icon: React.ReactNode[];
}

export default function MultipleChoiceQuestion({ questionText, options, answer, onChange, icon }: MultipleChoiceQuestionProps) {
  return (
    <div className="multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="multiple-choice-options">
        {options.map((opt, index) => (
          <button
            key={index}
            className={`choice-button ${answer === opt ? 'selected' : ''}`}
            onClick={() => onChange(opt)}
          >
            <div className="icon">{icon[index]}</div>
            <div>{opt}</div>
          </button>
        ))}
      </div>
    </div>
  );
}