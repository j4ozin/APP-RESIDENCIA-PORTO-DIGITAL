import './styles.css';

interface ImageLikingQuestionProps {
  questionText: string;
  imageUrl: string;
  options: string[];
  answer: string;
  onChange: (option: string) => void;
}

export default function ImageLikingQuestion({ questionText, imageUrl, options, answer, onChange }: ImageLikingQuestionProps) {
  return (
    <div className="image-like">
      <div className="image-like-image">
        <img src={imageUrl} alt="Exemplo visual" />
      </div>
      <div className="image-like-horizontal">
      <div className="image-like-question">
        <h3>{questionText}</h3>
      </div>
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
      
    </div>
  );
}
