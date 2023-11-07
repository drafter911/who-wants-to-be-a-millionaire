import {
  ILevel, IQuestionWithExtendedAnswerProps, TAppDispatch, TPageType, TRootState,
} from 'app/types';
import { setActivePage, setError, setLoading } from '../slices/appStateSlice';
import {
  imitateApiCalls, makeFakeAsyncCall, transformQuestionAnswers, getCurrentLevelReward,
} from '../../shared/utils';
import {
  IGameProgressState, setActiveLevelId, setLevels, setNextLevelId, setReward,
} from '../slices/gameProgressSlice';
import { setQuestion } from '../slices/questionSlice';
import { APP_PAGE_TYPES, ERROR_MESSAGE } from '../../shared/constants';

export const submitAnswers = (userAnswers: string[], correctAnswers: string[]) => async (dispatch
: TAppDispatch, getState: () => TRootState) => {
  dispatch(setLoading(true));

  try {
    // imitation of API calls
    await makeFakeAsyncCall(800);
    const isAnswerCorrect = userAnswers.every((answer: string) => correctAnswers.includes(answer));
    // end of imitation

    const {
      activeLevelId, nextLevelId, levels,
    }: IGameProgressState = getState();

    const reward = getCurrentLevelReward(levels, activeLevelId!);

    if (isAnswerCorrect && typeof nextLevelId === 'string') {
      const response = await imitateApiCalls(nextLevelId as string);

      const updatedLevels: ILevel[] = levels.map((level: ILevel) => ({
        ...level,
        isPassed: level.id === activeLevelId ? true : level.isPassed,
      }));

      const question = transformQuestionAnswers(response.randomQuestion);

      dispatch(setQuestion(question as IQuestionWithExtendedAnswerProps));
      dispatch(setActiveLevelId(response.activeLevelId as string));
      dispatch(setNextLevelId(response.nextLevelId as string));
      dispatch(setLevels(updatedLevels as ILevel[]));
      dispatch(setReward(reward as number));
    } else {
      if (isAnswerCorrect) dispatch(setReward(reward as number));

      dispatch(setActivePage(APP_PAGE_TYPES.RESULT as TPageType));
    }
  } catch (e) {
    dispatch(setError(ERROR_MESSAGE));
  } finally {
    dispatch(setLoading(false));
  }
};

export default submitAnswers;
