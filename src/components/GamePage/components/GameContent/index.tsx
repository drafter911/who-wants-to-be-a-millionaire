import React from 'react';
import { StyledWrapper, StyledContent } from './styled';
import Question from './components/Question';

function GameContent() {
  return (
    <StyledWrapper>
      <StyledContent>
        <Question />
      </StyledContent>

    </StyledWrapper>
  );
}

export default GameContent;
