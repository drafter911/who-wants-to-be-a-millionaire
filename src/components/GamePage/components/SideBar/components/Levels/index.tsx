import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ILevel, TLevelStatus } from 'app/types';
import { LEVEL_STATUSES } from '../../../../../../shared/constants';
import Level from './components/Level';
import { IGameProgressState, selectGameProgress } from '../../../../../../_store';

const getLevelStatus = (level: ILevel, activeLevelId: string): TLevelStatus => {
  if (level.id === activeLevelId) return LEVEL_STATUSES.ACTIVE;
  return level.isPassed ? LEVEL_STATUSES.DISABLED : LEVEL_STATUSES.INACTIVE;
};

function Levels() {
  const { levels, activeLevelId }:IGameProgressState = useSelector(selectGameProgress);

  const sortedLevels = useMemo<ILevel[]>(
    () => [...levels].sort((a: ILevel, b: ILevel) => b.reward - a.reward),
    [levels],
  );

  return (
    <>
      {
          sortedLevels.map((level: ILevel) => (
            <Level
              value={level.reward}
              status={getLevelStatus(level, activeLevelId!) as TLevelStatus}
              key={level.id}
            />
          ))
    }
    </>
  );
}

export default Levels;
