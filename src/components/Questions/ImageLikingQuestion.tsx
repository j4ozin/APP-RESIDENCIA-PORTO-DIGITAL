import './styles.css';

export default function ImageLikingQuestion({ questionText, imageUrl, options, answer, onChange }) {
  return (
    <div className="image-like-container">
      <div className="image-like-left">
        <h3>{questionText}</h3>
        <div className="image-like-options">
          {options.map((opt, index) => (
            <button
              key={index}
              className={answer === opt ? 'selected' : ''}
              onClick={() => onChange(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="image-like-right">
        <img src={imageUrl} alt="Exemplo visual" />
      </div>
    </div>
  );
}
