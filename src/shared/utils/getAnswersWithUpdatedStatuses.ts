import { IQuestionAnswerExtended } from 'app/types';
import { SIXTAGON_STATUSES } from '../constants';

export const getAnswersWithUpdatedStatuses = (
  answers:
  IQuestionAnswerExtended[],
  userAnswers: string[],
  correctAnswers:
  string[],
): IQuestionAnswerExtended[] => answers.map((answer) => {
  if (userAnswers.includes(answer.text) && !correctAnswers.includes(answer.text)) {
    return ({
      ...answer,
      status: SIXTAGON_STATUSES.WRONG,
    });
  }
  if (correctAnswers.includes(answer.text) || userAnswers.includes(answer.text)) {
    return ({
      ...answer,
      status: SIXTAGON_STATUSES.CORRECT,
    });
  }
  return ({
    ...answer,
    status: SIXTAGON_STATUSES.INACTIVE,
  });
});

export default getAnswersWithUpdatedStatuses;
