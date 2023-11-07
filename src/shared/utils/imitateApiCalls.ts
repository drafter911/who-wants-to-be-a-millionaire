import { IGameData } from 'app/types';
import { readJsonFromFile } from './readJsonFromFile';
import { makeFakeAsyncCall } from './makeFakeAsynCall';
import { getRandomNumber } from './getRandomNumber';

export const imitateApiCalls = async (activeLevelId: string | null) => {
  const data: IGameData = await readJsonFromFile('data.json');

  // imitation of API calls
  await makeFakeAsyncCall(500);

  if (!activeLevelId) {
    return {
      data,
      activeLevelId: null,
      randomQuestion: null,
      nextLevelId: null,
    };
  }

  const questionsForActiveLevel = activeLevelId ? data.questions[activeLevelId] : [];
  const levelNumber = Number(activeLevelId!.split('-')[1]);
  const randomIndex = getRandomNumber(0, (questionsForActiveLevel?.length || 1) - 1);
  // @ts-ignore
  const randomQuestion = questionsForActiveLevel?.[randomIndex];
  // end of imitation

  const nextLevelId: string | null = levelNumber < 12 ? `level-${levelNumber + 1}` : null;

  return {
    data,
    activeLevelId,
    randomQuestion,
    nextLevelId,
  };
};

export default imitateApiCalls;
