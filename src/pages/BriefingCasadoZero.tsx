import React, { useState, useEffect } from 'react';
import './BriefingCasadoZero.css';

import BriefingHeader from '../components/Briefing/BriefingHeader';
import BriefingFooter from '../components/Briefing/BriefingFooter';
import BriefingProgressBar from '../components/Briefing/BriefingProgressBar';
import QuestionRenderer from '../components/Questions/QuestionRenderer';
import { ResumoRespostas } from '../components/Questions/ResumoRespostas/ResumoRespostas';

import { questions } from '../components/Briefing/CasadoZero';

const BriefingCasadoZero: React.FC = () => {
  interface Answer {
    question: string;
    answer: string;
    imageUrl: string;
  }

  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [step, setStep] = useState(0);

  const saveAnswer = (step: number, answer: string, question: string, imageUrl: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [step]: { question, answer, imageUrl },
    }));
  };

  const steps = [
    ...questions.map((q, index) => ({
      component: (
        <QuestionRenderer
          key={index}
          step={index}
          questionData={q}
          answer={answers[index]?.answer || ''}
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

  // Função para lidar com a navegação via teclado
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setStep((prev) => Math.max(prev - 1, 0)); // Voltar, sem passar do passo 0
    } else if (event.key === 'ArrowRight') {
      
      setStep((prev) => Math.min(prev + 1, totalSteps - 1)); // Avançar, sem passar do último passo
    }
  };

  // Configurar o ouvinte de eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Limpar o ouvinte ao desmontar
    };
  }, [step, answers]); // Dependências para reavaliar a função handleKeyDown

  return (
    <div className="container">
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