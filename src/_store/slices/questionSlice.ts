import { createSlice } from '@reduxjs/toolkit';
import { TRootState, IQuestionWithExtendedAnswerProps, IQuestionAnswerExtended } from 'app/types';

const initialState: IQuestionWithExtendedAnswerProps = {
  question: '',
  answers: [],
  correctAnswers: [],
};

const questionSlice = createSlice({
  name: 'questionSlice',
  initialState,
  reducers: {
    setQuestion: (state, action: { payload: IQuestionWithExtendedAnswerProps }) => ({
      ...state,
      answers: action.payload.answers,
      question: action.payload.question,
      correctAnswers: action.payload.correctAnswers,
    }),
    setAnswersStatuses: (state, action: { payload: IQuestionAnswerExtended[] }) => ({
      ...state,
      answers: action.payload,
    }),
  },
});

export const { setQuestion, setAnswersStatuses } = questionSlice.actions;

export const selectQuestion = (state:
TRootState): IQuestionWithExtendedAnswerProps => state.questionReducer;

export default questionSlice.reducer;
