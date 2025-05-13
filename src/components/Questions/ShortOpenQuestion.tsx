export default function ShortOpenQuestion({ questionText, answer, onChange, inputType }) {
  return (
    <div className="input-container">
      <div className="input-question">
        <h3>{questionText}</h3>
        <div className="form-group">
          <input
            id="open-question"
            type={inputType}
            className="area"
            placeholder="Digite sua resposta"
            value={answer || ''}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}