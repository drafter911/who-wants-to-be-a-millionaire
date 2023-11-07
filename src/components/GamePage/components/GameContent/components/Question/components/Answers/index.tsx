import React, { useEffect, useState } from 'react';
import {
  IQuestionAnswerExtended, IQuestionWithExtendedAnswerProps,
} from 'app/types';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWrapper } from './styled';
import Answer from './components/Answer';
import {
  IGameProgressState,
  selectGameProgress,
  selectQuestion,
  submitAnswers,
  setAnswersStatuses,
  setSelectedAnswersStatuses,
} from '../../../../../../../../_store';
import { SIXTAGON_STATUSES } from '../../../../../../../../shared/constants';

function Answers() {
  const gameProgressState: IGameProgressState = useSelector((selectGameProgress));
  const questionState: IQuestionWithExtendedAnswerProps = useSelector((selectQuestion));
  const dispatch = useDispatch();
  const { answers, correctAnswers }: IQuestionWithExtendedAnswerProps = useSelector(selectQuestion);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerClick = (answerText: string): void => {
    dispatch(setAnswersStatuses(answers.map((answer) => ({
      ...answer,
      status: answer.text === answerText
        ? SIXTAGON_STATUSES.SELECTED : SIXTAGON_STATUSES.INACTIVE,
    }))));
    setSelectedAnswers([...selectedAnswers, answerText]);
  };

  useEffect(() => {
    if (selectedAnswers.length > 0 && selectedAnswers.length === correctAnswers.length) {
      (async () => {
        await setSelectedAnswersStatuses(selectedAnswers)(dispatch, () => questionState);
        await submitAnswers(selectedAnswers, correctAnswers)(dispatch, () => gameProgressState);
      })();
      setSelectedAnswers([]);
    }
  }, [answers, selectedAnswers, correctAnswers, dispatch, gameProgressState, questionState]);

  return (
    <StyledWrapper>
      {
        answers.map((answer: IQuestionAnswerExtended) => (
          <Answer
            key={answer.id}
            sequenceNumber={answer.sequenceNumber}
            text={answer.text}
            status={answer.status}
            onClick={() => handleAnswerClick(answer.text)}
          />
        ))
            }
    </StyledWrapper>
  );
}

export default Answers;
