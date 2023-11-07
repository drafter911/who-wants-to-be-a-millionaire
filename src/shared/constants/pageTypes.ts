import { TPageType } from 'app/types';

interface IAppPageTypes {
  INITIAL: TPageType;
  GAME: TPageType;
  RESULT: TPageType;
}

export const APP_PAGE_TYPES: IAppPageTypes = {
  INITIAL: 'initial',
  GAME: 'game',
  RESULT: 'result',
};

export default APP_PAGE_TYPES;
