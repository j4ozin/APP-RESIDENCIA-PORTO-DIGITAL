import React, { useState } from 'react';
import './BriefingCasadoZero.css';
import BriefingHeader from '../components/BriefingHeader';
import BriefingFooter from '../components/BriefingFooter';
import BriefingProgressBar from '../components/BriefingProgressBar';
import QuestionRenderer from '../components/Questions/QuestionRenderer';
import { FaHome, FaCouch, FaTree } from 'react-icons/fa';
import { BiSolidLike, BiSolidDislike, BiQuestionMark } from "react-icons/bi";


function ResumoRespostas({ answers }) {
  const baixarRespostas = () => {
    const blob = new Blob([JSON.stringify(answers, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'respostas-briefing.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="resumo-container">
      <h3>Resumo das Respostas:</h3>
      <ul>
  {Object.entries(answers).map(([step, { question, answer, imageUrl }]) => (
    <li key={step}>
      <strong>{question}</strong><br />
      {answer || "(Sem resposta)"}
      {imageUrl && (
        <>
          <br />
          <em>Imagem: {imageUrl}</em>
        </>
      )}
    </li>
  ))}
</ul>
      <button onClick={baixarRespostas}>📥 Baixar respostas</button>
    </div>
  );
}

const BriefingCasadoZero: React.FC = () => {
  const [answers, setAnswers] = useState({});

  const saveAnswer = (step, answer, question, imageUrl) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [step]: { question, answer, imageUrl },
    }));
  };

  const questions = [
    {
      type: 'open',
      question: 'Onde está localizado o terreno para execução do projeto? (Endereço completo)',
    },
    {
      type: 'multiple-choice',
      question: 'É localizado em algum condomínio? Se sim, qual? (Caso sim, anexar legislação do condomínio)',
      icon: [<BiSolidLike  />, <BiSolidDislike  />],
      options: ['Sim', 'Não'],
    },
    {
      type: 'multiple-choice',
      question: 'Você já possui Estudo topográfico do terreno?',
      icon: [<BiSolidLike  />, <BiSolidDislike  />],
      options: ['Sim', 'Não'],
    },
    {
      type: 'multiple-choice',
      question: 'Será térreo ou dois pavimentos?',
      icon: [<BiSolidLike  />, <BiSolidDislike  />],
      options: ['Térreo', 'Dois pavimentos', 'Mais de dois pavimentos', 'Ainda não defini'],
    },
    {
      type: 'open',
      question: 'Qual a previsão aproximada para o início do projeto?',
    },
    {
      type: 'open',
      question: 'Qual o prazo para a previsão aproximada para o início da obra?',
    },
    {
      type: 'open',
      question: 'Qual a sua maior exigência para esse projeto? Quais são suas expectativas? o que é indispensável pra você?',
    },
    {
      type: 'open',
      question: 'O que existe na sua atual residência que você não gosta e o que existe que você gostaria que tivesse nesse novo projeto?',
    },
    {
      type: 'open',
      question: 'Quantas pessoas irão morar na residência, qual a  idade e profissão desses moradores?',
    },
    {
      type: 'open',
      question: 'Quantos m² tem o terreno e quantos m² pretende construir?',
    },
    {
      type: 'open',
      question: 'Descreva os ambientes que possivelmente terão na residência: (exemplo: sala, cozinha, sala de jantar, 2 quartos, 1 suíte, closet, lavabo...)',
    },
    {
      type: 'multiple-choice',
      question: 'Algum portador de necessidades especiais irá utilizar a casa?',
      icon: [<BiSolidLike  />, <BiSolidDislike  />, <BiQuestionMark />],
      options: ['Sim', 'Não', 'Talvez'],
    },
    {
      type: 'open',
      question: 'Gostariam de piscina? Se sim com hidromassagem, com prainha, formato curvo, retangular, etc?',
    },
    {
      type: 'multiple-choice',
      question: 'Qual estilo você prefere?',
      icon: [<FaHome />, <FaCouch />, <FaTree />],
      options: ['Moderno', 'Clássico', 'Rústico'],
    },
    {
      type: 'image-liking',
      question: 'Você gosta dessa fachada?',
      imageUrl: '/src/components/LandingPage/Projects/assets/comerciais.png',
      options: ['Sim', 'Não', 'Talvez'],
    },
  ];
  

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

  const [step, setStep] = useState(0);
  const totalSteps = steps.length;
  const percentage = (step / (totalSteps - 1)) * 100;
  const currentStepComponent = steps[step].component;

  return (
    <div>
      <BriefingHeader />
      <BriefingProgressBar
        currentStep={step === totalSteps - 1 ? totalSteps - 1 : step}
        totalSteps={totalSteps - 1}
        percentage={step === totalSteps - 1 ? 100 : percentage}
      />
      {currentStepComponent}
      <BriefingFooter
        step={step}
        totalSteps={totalSteps}
        onBack={() => setStep(prev => Math.max(prev - 1, 0))}
        onNext={() => setStep(prev => Math.min(prev + 1, totalSteps - 1))}
      />
    </div>
  );
};

export default BriefingCasadoZero;
