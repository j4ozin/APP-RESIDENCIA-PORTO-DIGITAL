import './styles.css';
import OpenQuestion from './OpenQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import ImageLikingQuestion from './ImageLikingQuestion';
import MultipleChoiceWithOtherQuestion from './MultipleChoiceWithOtherQuestion';
import YesNoWithFollowUpQuestion from './YesNoWithFollowUpQuestion';
import VisualMultipleChoiceQuestion from './VisualMultipleChoiceQuestion';
import VisualMultipleChoiceWithOtherQuestion from './VisualMultipleChoiceWithOtherQuestion';
import YesNoWithFileUpload from './YesNoWithFileUploadQuestion';
import ShortOpenQuestion from './ShortOpenQuestion';
import AddressForm from './AddressForm';

interface QuestionRendererProps {
  step: number;
  questionData: QuestionData;
  answer: unknown;
  saveAnswer: (step: number, value: unknown, question: string, imageUrl?: string) => void;
}

interface QuestionData {
  type: string;
  question: string;
  options?: { label: string; imageUrl: string }[]; // Updated to match the provided data structure
  followUp?: string;
  uploadLabel?: string;
  icon?: React.ReactNode;
  inputType?: string;
  followup?: string;
  imageUrl?: string;
}

export default function QuestionRenderer({ step, questionData, answer, saveAnswer }: QuestionRendererProps) {
  const handleAnswer = (value: unknown) => {
    saveAnswer(step, value, questionData.question);
  };

  switch (questionData.type) {
    case 'address':
      return (
        <AddressForm
          questionText={questionData.question}
          onChange={handleAnswer}
        />
      );
    case 'open':
      return (
        <OpenQuestion
          questionText={questionData.question}
          answer={typeof answer === 'string' ? answer : ''}
          onChange={handleAnswer}
        />

      );
    case 'short-open':
      return (
        <ShortOpenQuestion
          questionText={questionData.question}
          answer={typeof answer === 'string' ? answer : ''}
          onChange={handleAnswer}
          inputType={questionData.inputType || 'text'}
        />
      );
    case 'multiple-choice': {
      const options = (questionData.options ?? []).map(opt =>
        typeof opt === 'string' ? opt : opt.label
      );
      const icon = Array.isArray(questionData.icon) ? questionData.icon : [];
      return (
        <MultipleChoiceQuestion
          questionText={questionData.question}
          options={options}
          answer={typeof answer === 'string' ? answer : ''}
          onChange={handleAnswer}
          icon={icon}
        />
      );
    }
    case 'image-liking': {
      const options = (questionData.options ?? []).map(opt =>
        typeof opt === 'string' ? opt : opt.label
      );

      return (
        <ImageLikingQuestion
          questionText={questionData.question}
          imageUrl={questionData.imageUrl || ''}
          options={options}
          answer={typeof answer === 'string' ? answer : ''}
          onChange={(value: unknown) => saveAnswer(step, value, questionData.question, questionData.imageUrl)}
        />
      );
    }
    case 'multiple-choice-other': {
      const options = (questionData.options ?? []).map(opt =>
        typeof opt === 'string' ? opt : opt.label
      );

      return (
        <MultipleChoiceWithOtherQuestion
          questionText={questionData.question}
          options={options}
          answer={typeof answer === 'string' ? answer : ''}
          onChange={handleAnswer}
          icon={Array.isArray(questionData.icon) ? (questionData.icon as string[]) : undefined}
        />
      );
    }
    case 'yes-no-follow-up':
      { const validAnswer =
        typeof answer === 'string' && (answer === 'Sim' || answer === 'Não')
          ? answer
          : typeof answer === 'object' &&
            answer !== null &&
            'tipo' in answer &&
            'detalhe' in answer &&
            typeof answer.tipo === 'string' &&
            (answer.tipo === 'Sim' || answer.tipo === 'Não')
            ? { tipo: (answer as { tipo: string; detalhe: string }).tipo, detalhe: (answer as { tipo: string; detalhe: string }).detalhe }
            : undefined;
      console.log('answer bruto:', answer);
      console.log('validAnswer:', validAnswer);
      console.log('questionData.followUp:', questionData.followUp);
      return (
        <YesNoWithFollowUpQuestion
          questionText={questionData.question}
          answer={validAnswer || ''}
          onChange={handleAnswer}
          followUp={questionData.followUp || 'Por favor, forneça mais detalhes'}
        />
      ); }
    case 'visual-multiple-choice':
      return (
        <VisualMultipleChoiceQuestion
          questionText={questionData.question}
          options={questionData.options}
          answer={Array.isArray(answer) ? (answer as string[]) : undefined}
          onChange={handleAnswer}
        />
      );
    case 'visual-multiple-choice-other':
      return (
        <VisualMultipleChoiceWithOtherQuestion
          key={`step-${step}`}
          questionText={questionData.question}
          options={questionData.options || []}
          onChange={handleAnswer}
          answer={Array.isArray(answer) ? answer : []}
        />
      );
    case 'yes-no-upload-file':
      return (
        <YesNoWithFileUpload
          questionText={questionData.question}
          uploadLabel={questionData.uploadLabel || 'Anexe um arquivo'}
          answer={
            typeof answer === 'string' ||
              (typeof answer === 'object' && answer !== null && 'tipo' in answer && typeof (answer as { tipo: unknown }).tipo === 'string')
              ? (answer as { tipo: string; file?: File; detalhe?: string })
              : ''
          }
          followUp={questionData.followUp || ''}
          onChange={handleAnswer}
        />);
    default:
      return <p>Tipo de pergunta desconhecido</p>;
  }
}
