import React from 'react';
import './BriefingAnswers.css';

type AnswerType = string | number | string[] | Record<string, unknown>;

interface BriefingItem {
  question: string;
  answer: AnswerType;
  imageUrl?: string;
}

interface BriefingData {
  [key: string]: BriefingItem;
}

interface BriefingAnswersProps {
  data: BriefingData;
}

const BriefingAnswers: React.FC<BriefingAnswersProps> = ({ data }) => {
  const renderAnswer = (answer: AnswerType) => {
    if (typeof answer === 'string' || typeof answer === 'number') {
      return <p>{answer}</p>;
    }

    if (Array.isArray(answer)) {
      return (
        <ul>
          {answer.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (typeof answer === 'object' && answer !== null) {
      return (
        <ul>
          {Object.entries(answer).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {typeof value === 'object' ? JSON.stringify(value) : String(value)}
            </li>
          ))}
        </ul>
      );
    }

    return <p>Resposta não identificada</p>;
  };

  return (
    <div className="briefing-container">
      {Object.entries(data).map(([key, item]) => (
        <div key={key} className="briefing-item">
          <h3 className="briefing-question">{item.question}</h3>
          <div className="briefing-answer">{renderAnswer(item.answer)}</div>
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt="Imagem relacionada"
              className="briefing-image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BriefingAnswers;
