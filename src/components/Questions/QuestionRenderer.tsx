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

interface QuestionData {
  type: string;
  question: string;
  options?: string[];
  icon?: string | never[];
  imageUrl?: string;
  followup?: string;
}

interface QuestionRendererProps {
  step: number;
  questionData: QuestionData;
  answer: unknown;
  saveAnswer: (step: number, value: unknown, question: string, imageUrl?: string) => void;
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
      answer={answer}
      onChange={handleAnswer}
    />
  );
    case 'open':
      return (
        <OpenQuestion
          questionText={questionData.question}
          answer={answer as string | { tipo: string; detalhe?: string }}
          onChange={handleAnswer}
        />

      );
    case 'short-open':
      return (
        <ShortOpenQuestion
          questionText={questionData.question}
          answer={answer as string | { tipo: string; detalhe?: string }}
          onChange={handleAnswer}
          inputType={questionData.inputType}
        />
      );
    case 'multiple-choice':
      return (
        <MultipleChoiceQuestion
          questionText={questionData.question}
          options={questionData.options}
          answer={answer}
          onChange={handleAnswer}
          icon={questionData.icon}
        />
      );
    case 'image-liking':
      return (
        <ImageLikingQuestion
          questionText={questionData.question}
          imageUrl={questionData.imageUrl}
          options={questionData.options}
          answer={answer}
          onChange={(value: unknown) => saveAnswer(step, value, questionData.question, questionData.imageUrl)}
        />
      );
    case 'multiple-choice-other':


      return (
        <MultipleChoiceWithOtherQuestion
          questionText={questionData.question}
          options={questionData.options}
          answer={answer}
          onChange={handleAnswer}
          icon={questionData.icon}
        />
      );
    case 'yes-no-follow-up':
      return (
        <YesNoWithFollowUpQuestion
          questionText={questionData.question}
          answer={answer}
          onChange={handleAnswer}
          followUp={questionData.followup}
        />
      );
    case 'visual-multiple-choice':
      return (
        <VisualMultipleChoiceQuestion
          questionText={questionData.question}
          options={questionData.options}
          answer={answer}
          onChange={handleAnswer}
        />
      );
    case 'visual-multiple-choice-other':
      return (
        <VisualMultipleChoiceWithOtherQuestion
          questionText={questionData.question}
          options={questionData.options}
          answer={(answer as string[]) || []}
          onChange={handleAnswer}
        />
      );
    case 'yes-no-upload-file':
      return (
        <YesNoWithFileUpload
          questionText={questionData.question}
          uploadLabel={questionData.uploadLabel}
          answer={answer}
          followUp={questionData.followUp}
          onChange={handleAnswer}
        />);
    default:
      return <p>Tipo de pergunta desconhecido</p>;
  }
}
