import React from 'react';
import './styles.css';


const BriefingProgressBar = ({ currentStep, totalSteps, percentage }) => {
  const circles = Array.from({ length: totalSteps }, (_, i) => (
    <span key={i} className={`circle ${i < currentStep ? 'active' : ''}`}>
      {i === currentStep && (
        <span className="tooltip">{Math.round(percentage)}%</span>
      )}
    </span>
  ));

  return (
    <div>
      <div className="status">
        <div className="status-left">
          <div className="stepCircle">
            {currentStep === totalSteps ? '✓' : currentStep + 1} {/* Ajuste para Passo 3 de 3 */}
          </div>
          <span className="stepText">
            {currentStep === totalSteps ? 'Concluído!' : `Passo ${currentStep + 1} de ${totalSteps}`}
          </span>
        </div>
        <div className={`progressBar ${currentStep === totalSteps ? 'completed' : ''}`}>
          {circles}
        </div>
      </div>
    </div>
  );
};



export default BriefingProgressBar;

