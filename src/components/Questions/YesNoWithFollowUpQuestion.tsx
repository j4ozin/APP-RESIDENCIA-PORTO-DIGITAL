import { useState, useEffect } from 'react';
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import './styles.css';

interface YesNoWithFollowUpQuestionProps {
  questionText: string;
  followUp: string;
  answer: string | { tipo: string; detalhe?: string };
  onChange: (value: string | { tipo: string; detalhe: string }) => void;
}

export default function YesNoWithFollowUpQuestion({ questionText, followUp, answer, onChange }: YesNoWithFollowUpQuestionProps) {
  const [selected, setSelected] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    console.log('useEffect - answer:', answer);
    if (typeof answer === 'object' && answer?.tipo === 'Sim') {
      setSelected('Sim');
      setDetail(answer.detalhe || '');
    } else if (answer === 'Sim' || answer === 'Não') {
      setSelected(answer);
      setDetail('');
    } else {
      console.log('answer em formato inesperado:', answer);
    }
  }, [answer]);

  const handleSelect = (opt: string) => {
    console.log('handleSelect - opt:', opt);
    setSelected(opt);
    if (opt === 'Não') {
      setDetail('');
      onChange('Não');
    } else {
      onChange({ tipo: 'Sim', detalhe: '' });
    }
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setDetail(val);
    onChange({ tipo: 'Sim', detalhe: val });
  };

  console.log('Renderizando - selected:', selected, 'followUp:', followUp);

  return (
    <div className="multiple-choice-container">
      <h3>{questionText}</h3>
      <div className="multiple-choice-options">
        <button
          className={`choice-button ${selected === 'Sim' ? 'selected' : ''}`}
          onClick={() => handleSelect('Sim')}
        >
          <div className="icon"><BiSolidLike /></div>
          <div>Sim</div>
        </button>
        <button
          className={`choice-button ${selected === 'Não' ? 'selected' : ''}`}
          onClick={() => handleSelect('Não')}
        >
          <div className="icon"><BiSolidDislike /></div>
          <div>Não</div>
        </button>
      </div>
      {selected === 'Sim' && (
        <div className="other-input-container">
          <textarea
            className="other-input"
            placeholder={followUp}
            value={detail}
            onChange={handleDetailChange}
            style={{ display: 'block', width: '100%', height: '100px', border: '1px solid black' }}
          />
        </div>
      )}
    </div>
  );
}