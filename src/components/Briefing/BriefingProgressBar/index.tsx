import './styles.css';

interface BriefingProgressBarProps {
  currentStep: number;
  totalSteps: number;
  percentage: number;
}

const BriefingProgressBar: React.FC<BriefingProgressBarProps> = ({
  currentStep,
  totalSteps,
  percentage,
}) => {
  return (
    <div className="progressContainer">
      <div className="progressHeader">
        <div className="stepCircle">
          {currentStep === totalSteps ? '✓' : currentStep + 1}
        </div>
        <span className="stepText">{Math.round(percentage)}% concluído</span>
      </div>

      <div className="progressBarWrapper">
        <div
          className="progressFill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default BriefingProgressBar;
