import React from 'react';
import OpenQuestion from './OpenQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import ImageLikingQuestion from './ImageLikingQuestion';
import './styles.css';

export default function Question({ step, question, saveAnswer }) {
  const handleAnswer = (value) => {
    saveAnswer(step, value, question);
  };

  return (
    <div className="input-container">
      <div className="input-question">
        <h3>{question.text}</h3>

        {question.type === 'open' && (
          <OpenQuestion answer={question.answer} onChange={handleAnswer} />
        )}

        {question.type === 'multiple-choice' && (
          <MultipleChoiceQuestion
            options={question.options}
            answer={question.answer}
            onChange={handleAnswer}
          />
        )}

        {question.type === 'image-liking' && (
          <ImageLikingQuestion
            imageUrl={question.imageUrl}
            options={question.options}
            answer={question.answer}
            onChange={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}
