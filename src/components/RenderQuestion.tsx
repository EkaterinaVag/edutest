import React from 'react';
import CheckboxQuestionForm from './questions/CheckboxQuestion';
import TextInputQuestionForm from './questions/TextInputQuestion';
import TextareaQuestionForm from './questions/TextareaQuestion';
import RadioQuestionForm from './questions/RadioQuestion';
import useSubmit from '../hooks/useSubmit';

interface QuestionType {
  type: string
}

interface QuestionsProps extends QuestionType {
  question: string
  options?: string[]
}

const RenderQuestion = (props: QuestionsProps): JSX.Element | null => {
  const { type, question, options } = props;
  const { handleSubmit } = useSubmit();
  switch (type) {
    case 'SINGLE_CHOICE':
      return <RadioQuestionForm question={question} options={options} handleSubmit={handleSubmit} />;
    case 'MULTIPLE_CHOICE':
      return <CheckboxQuestionForm question={question} options={options} handleSubmit={handleSubmit} />;
    case 'SHORT_ANSWER':
      return <TextInputQuestionForm question={question} handleSubmit={handleSubmit} />;
    case 'LONG_ANSWER':
      return <TextareaQuestionForm question={question} handleSubmit={handleSubmit} />;
    default:
      return null;
  }
};

export default RenderQuestion;
