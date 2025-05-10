import React from 'react';
import './styles.css';
import OpenQuestion from './OpenQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import ImageLikingQuestion from './ImageLikingQuestion';

export default function QuestionRenderer({ step, questionData, answer, saveAnswer }) {
  const handleAnswer = (value) => {
    saveAnswer(step, value, questionData.question);
  };

  switch (questionData.type) {
    case 'open':
      return (
        <OpenQuestion
          questionText={questionData.question}
          answer={answer}
          onChange={handleAnswer}
        />

      );
    case 'multiple-choice':
      return (
        <MultipleChoiceQuestion
        questionText={questionData.question}
          options={questionData.options}
          answer={answer}
          onChange={handleAnswer}
          icon={questionData.icon}
        />
      );
      case 'image-liking':
        return (
          <ImageLikingQuestion
            questionText={questionData.question}
            imageUrl={questionData.imageUrl}
            options={questionData.options}
            answer={answer}
            onChange={(value) => saveAnswer(step, value, questionData.question, questionData.imageUrl)}
          />
        );
    default:
      return <p>Tipo de pergunta desconhecido</p>;
  }
}
