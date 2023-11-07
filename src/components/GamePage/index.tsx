import React from 'react';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './styled';
import GameContent from './components/GameContent';
import SideBar from './components/SideBar';
import { IAppState, selectAppState } from '../../_store';
import Loader from '../../shared/components/Loader';

function GamePage() {
  const { loading }: IAppState = useSelector(selectAppState);
  return (
    <>
      {loading && <Loader text="Loading..." />}
      <StyledWrapper>
        <GameContent />
        <SideBar />
      </StyledWrapper>
    </>
  );
}

export default GamePage;
