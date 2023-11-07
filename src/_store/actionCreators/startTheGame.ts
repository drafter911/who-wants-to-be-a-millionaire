import {
  IGameData, ILevel, IQuestionWithExtendedAnswerProps, TAppDispatch,
} from 'app/types';
import { setError, setActivePage, setLoading } from '../slices/appStateSlice';
import { imitateApiCalls, transformQuestionAnswers } from '../../shared/utils';
import { APP_PAGE_TYPES, ERROR_MESSAGE } from '../../shared/constants';
import { setLevels, setActiveLevelId, setNextLevelId } from '../slices/gameProgressSlice';
import { setQuestion } from '../slices/questionSlice';

export const startTheGame = () => async (dispatch: TAppDispatch): Promise<IGameData> => {
  try {
    dispatch(setLoading(true));
    const {
      data, nextLevelId, activeLevelId, randomQuestion,
    } = await imitateApiCalls('level-1');

    dispatch(setLevels(data.levels as ILevel[]));
    dispatch(
      setQuestion(transformQuestionAnswers(randomQuestion) as IQuestionWithExtendedAnswerProps),
    );
    dispatch(setActiveLevelId(activeLevelId as string));
    dispatch(setNextLevelId(nextLevelId as string));
    return dispatch(setActivePage(APP_PAGE_TYPES.GAME));
  } catch (e) {
    return dispatch(setError(ERROR_MESSAGE));
  } finally {
    dispatch(setLoading(false));
  }
};

export default startTheGame();
