import React from 'react';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../shared/components/Banner';
import { formatMoney } from '../../shared/utils';
import {
  IAppState,
  IGameProgressState, selectAppState, selectGameProgress, setActivePage, setReward,
} from '../../_store';
import { APP_PAGE_TYPES } from '../../shared/constants';

function GameOverPage() {
  const theme = useTheme();
  const { earnedReward }: IGameProgressState = useSelector(selectGameProgress);
  const { error }: IAppState = useSelector(selectAppState);
  const dispatch = useDispatch();
  return (
    <Banner
      buttonText="Try again"
      onButtonClick={() => {
        dispatch(setReward(0));
        dispatch(setActivePage(APP_PAGE_TYPES.INITIAL));
      }}
      title={earnedReward > 0 ? `${formatMoney(earnedReward)} earned` : 'You lost!'}
      subTitle="Total score:"
      background={theme.colors.baseLightest}
      errorMessage={error}
    />
  );
}

export default GameOverPage;
