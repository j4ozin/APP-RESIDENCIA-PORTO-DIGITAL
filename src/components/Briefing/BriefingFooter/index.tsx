import React from 'react';
import './styles.css';

interface BriefingFooterProps {
  onBack: () => void;
  onNext: () => void;
  step: number;
  totalSteps: number;
}


const BriefingFooter: React.FC<BriefingFooterProps> = ({ onBack, onNext, step, totalSteps }) => {
  return (
    <div className='briefing-footer'>
      <div className='footer-buttons'>
        <div className='footer-navButton'>
          <button
            onClick={onBack}
            className={`footer-button ${step === 0 ? 'invisible' : ''}`}
          >
            &lt;&lt; voltar
          </button>
        </div>

        <div className='footer-navButton'>
          <button>continuar mais tarde</button>
        </div>

        <div className='footer-navButton'>
        <button
  onClick={onNext}
  className={`footer-button ${step === totalSteps - 1 ? 'invisible' : ''}`}
>
  continuar &gt;&gt;
</button>

        </div>
      </div>
    </div>
  );
};

export default BriefingFooter;
