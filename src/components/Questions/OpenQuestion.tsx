interface OpenQuestionProps {
  questionText: string;
  answer: string;
  onChange: (value: string) => void;
}

export default function OpenQuestion({ questionText, answer, onChange }: OpenQuestionProps) {
  return (
    <div className="input-container">
      <div className="input-question">
      <h3>{questionText}</h3>
    <div className="form-group">
      <textarea
        id="open-question"
        className="area"
        placeholder="Digite sua resposta"
        value={answer || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    </div></div></div>
  );
}
