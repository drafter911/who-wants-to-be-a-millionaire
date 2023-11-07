import { IQuestion, IQuestionWithExtendedAnswerProps } from 'app/types';
import nextId from 'react-id-generator';
import { SIXTAGON_STATUSES } from '../constants';

export const transformQuestionAnswers = (question
: IQuestion): IQuestionWithExtendedAnswerProps => ({
  ...question,
  answers: question.answers.map((answer, index) => ({
    id: nextId(),
    text: answer,
    sequenceNumber: index,
    status: SIXTAGON_STATUSES.INACTIVE,
  })),
}) as IQuestionWithExtendedAnswerProps;

export default transformQuestionAnswers;
