import React from 'react';
import { IQuestionWithExtendedAnswerProps } from 'app/types';
import { useSelector } from 'react-redux';
import { StyledWrapper, StyledQuestionTextWrapper } from './styled';
import Typography from '../../../../../../shared/components/Typography';
import Answers from './components/Answers';
import { useIsMobile } from '../../../../../../shared/hooks';
import { IAppState, selectAppState, selectQuestion } from '../../../../../../_store';
import ErrorMessage from '../../../../../../shared/components/ErrorMessage';
import { ERROR_MESSAGE } from '../../../../../../shared/constants';

function Question() {
  const isMobile: boolean = useIsMobile(860);
  const { question }: IQuestionWithExtendedAnswerProps = useSelector(selectQuestion);
  const { error }: IAppState = useSelector(selectAppState);
  return (
    <StyledWrapper>
      <StyledQuestionTextWrapper>
        <Typography.Title level={2} align={isMobile ? 'center' : 'left'}>{question}</Typography.Title>
      </StyledQuestionTextWrapper>
      {error && <ErrorMessage errorMessage={ERROR_MESSAGE} />}
      <Answers />
    </StyledWrapper>
  );
}

export default Question;
