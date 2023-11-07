import { IQuestionWithExtendedAnswerProps, TAppDispatch, TRootState } from 'app/types';
import { setAnswersStatuses } from '../slices/questionSlice';
import { getAnswersWithUpdatedStatuses, makeFakeAsyncCall } from '../../shared/utils';

export const setSelectedAnswersStatuses = (userAnswers
: string[]) => async (dispatch:
TAppDispatch, getState: TRootState) => {
  const { answers, correctAnswers }: IQuestionWithExtendedAnswerProps = getState();
  await makeFakeAsyncCall(500);

  const newAnswers = getAnswersWithUpdatedStatuses(answers, userAnswers, correctAnswers);
  dispatch(setAnswersStatuses(newAnswers));
};

export default setSelectedAnswersStatuses;
