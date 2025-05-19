import './styles.css';


interface BriefingProgressBarProps {
  currentStep: number;
  totalSteps: number;
  percentage: number;
}

const BriefingProgressBar: React.FC<BriefingProgressBarProps> = ({ currentStep, totalSteps, percentage }) => {
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
            {currentStep === totalSteps ? '✓' : currentStep + 1}
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

