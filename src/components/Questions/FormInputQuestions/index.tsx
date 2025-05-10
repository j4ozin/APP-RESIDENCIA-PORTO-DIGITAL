import React, { useEffect, useState } from 'react';
import './styles.css';

export default function InputQuestion({ step, question, saveAnswer }) {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(''); // Reseta o textarea quando o step muda
  }, [step]);

  const handleChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
    saveAnswer(step, value, question); // Agora passa a pergunta também
  };

  return (
    <div className="input-container">
      <div className="input-question">
        <h3>{question}</h3>
        <form>
          <div key={step} className="form-group">
            <label htmlFor={`question-${step}`}></label>
            <textarea
              className="area"
              id={`question-${step}`}
              placeholder="Digite sua resposta"
              value={answer}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
