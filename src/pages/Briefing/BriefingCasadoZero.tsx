import React, { useState, useEffect } from 'react';
import './BriefingCasadoZero.css';

import BriefingHeader from '../../components/Briefing/BriefingHeader';
import BriefingFooter from '../../components/Briefing/BriefingFooter';
import BriefingProgressBar from '../../components/Briefing/BriefingProgressBar';
import QuestionRenderer from '../../components/Questions/QuestionRenderer';
import { ResumoRespostas } from '../../components/Questions/ResumoRespostas/ResumoRespostas';

import { questions } from '../../data/CasadoZero';

const BriefingCasadoZero: React.FC = () => {
  interface Answer {
    question: string;
    answer: string | string[];
    imageUrl: string;
  }

  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [step, setStep] = useState(0);

  const saveAnswer = (step: number, value: unknown, question: string, imageUrl?: string) => {
    console.log('saveAnswer - Step:', step, 'Value:', value, 'Question:', question, 'ImageUrl:', imageUrl);
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [step]: { question, answer: value as string | string[], imageUrl: imageUrl || '' },
      };
      console.log('saveAnswer - New Answers:', newAnswers);
      return newAnswers;
    });
  };

  const steps = [
    ...questions.map((q, index) => ({
      component: (
        <QuestionRenderer
          key={index}
          step={index}
          questionData={{
            ...q,
            options: q.options?.map((option) =>
              typeof option === 'string' ? { label: option, imageUrl: '' } : option
            ),
          }}
          answer={
            q.type === 'visual-multiple-choice-other' || q.type === 'visual-multiple-choice'
              ? Array.isArray(answers[index]?.answer)
                ? answers[index]?.answer
                : []
              : answers[index]?.answer || ''
          }
          saveAnswer={saveAnswer}
        />
      ),
    })),
    {
      component: <ResumoRespostas answers={answers} />,
    },
  ];

  const totalSteps = steps.length;
  const percentage = (step / (totalSteps - 1)) * 100;
  const currentStepComponent = steps[step].component;

  const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
    const activeElement = document.activeElement;
    if (activeElement?.tagName === 'BUTTON' || activeElement?.tagName === 'INPUT') {
      return;
    }
    if (event.key === 'ArrowLeft') {
      setStep((prev) => Math.max(prev - 1, 0));
    } else if (event.key === 'ArrowRight') {
      setStep((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  }, [totalSteps]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [step, answers, handleKeyDown]);

  return (
    <div className="briefing-container">
      <BriefingHeader />
      <div className="centro">
        <div className="progresso">
          <BriefingProgressBar
            currentStep={step === totalSteps - 1 ? totalSteps - 1 : step}
            totalSteps={totalSteps - 1}
            percentage={step === totalSteps - 1 ? 100 : percentage}
          />
        </div>
        <div className="perguntas">{currentStepComponent}</div>
      </div>
      <BriefingFooter
        step={step}
        totalSteps={totalSteps}
        onBack={() => setStep((prev) => Math.max(prev - 1, 0))}
        onNext={() => {
          setStep((prev) => Math.min(prev + 1, totalSteps - 1));
        }}
      />
    </div>
  );
};

export default BriefingCasadoZero;