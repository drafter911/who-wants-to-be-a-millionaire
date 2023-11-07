import { ILevel } from 'app/types';

export const getCurrentLevelReward = (
  levels:
  ILevel[],
  activeLevelId: string,
): number => (activeLevelId ? levels.find((
  level: ILevel,
) => level.id === activeLevelId)?.reward || 0 : 0);

export default getCurrentLevelReward;
