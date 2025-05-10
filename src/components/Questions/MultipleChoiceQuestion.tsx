export default function MultipleChoiceQuestion({ questionText, options, answer, onChange, icon }) {
  return (
    <div className="multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="multiple-choice-options">
        {options.map((opt, index) => (
          <button
            key={index}
            className={`choice-button ${answer === opt ? 'selected' : ''}`}
            onClick={() => onChange(opt)}
          ><div>
            <span className="icon">{icon[index]}</span></div>
            <div>{opt}</div>
          </button>
        ))}
      </div>
    </div>
  );
}