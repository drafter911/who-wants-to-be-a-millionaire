declare module 'app/types' {
  import store from './_store';

  export type TSixtagonStatus = 'inactive' | 'active' | 'disabled' | 'correct' | 'selected' | 'wrong' | 'hovered';

  export type TSixtagonSize = 'small' | 'large';

  export type TLevelStatus = 'inactive' | 'active' | 'disabled';

  export type TPageType = 'initial' | 'game' | 'result';

  export type TRootState = ReturnType<typeof store.getState>;

  export type TAppDispatch = typeof store.dispatch;

  export interface ILevel {
    id: string;
    reward: number;
    isPassed: boolean;
  }

  export interface IQuestion {
    length: number;
    question: string;
    answers: string[];
    correctAnswers: string[];
  }

  export interface IGameData {
    levels: ILevel[];
    questions: {
      [key: string]: IQuestion;
    };
  }

  export interface IQuestionAnswerExtended {
    id: string;
    text: string;
    sequenceNumber: number;
    status: TSixtagonStatus;
  }

  export interface IQuestionWithExtendedAnswerProps {
    answers: IQuestionAnswerExtended[];
    question: string;
    correctAnswers: string[];

  }
}
