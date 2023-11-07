import { configureStore } from '@reduxjs/toolkit';

import appStateReducer from './slices/appStateSlice';
import gameProgressReducer from './slices/gameProgressSlice';
import questionReducer from './slices/questionSlice';

const store = configureStore({
  reducer: {
    appStateReducer,
    gameProgressReducer,
    questionReducer,
  },
});

export const action = (type: string) => store.dispatch({ type });

export * from './actionCreators';
export * from './slices/appStateSlice';
export * from './slices/gameProgressSlice';
export * from './slices/questionSlice';

export default store;
