import { createSlice } from '@reduxjs/toolkit';
import { ILevel, TRootState } from 'app/types';

export interface IGameProgressState {
  levels: ILevel[];
  activeLevelId: string | null;
  nextLevelId: string | null;
  earnedReward: number;
}

const initialState: IGameProgressState = {
  levels: [],
  activeLevelId: null,
  nextLevelId: null,
  earnedReward: 0,
};

const gameProgressSlice = createSlice({
  name: 'gameProgressSlice',
  initialState,
  reducers: {
    setLevels: (state, action: { payload: ILevel[] }) => ({
      ...state,
      levels: action.payload,
    }),
    setActiveLevelId: (state, action: { payload: string }) => ({
      ...state,
      activeLevelId: action.payload,
    }),
    setNextLevelId: (state, action: { payload: string }) => ({
      ...state,
      nextLevelId: action.payload,
    }),
    setReward: (state, action:{ payload: number }) => ({
      ...state,
      earnedReward: action.payload,
    }),

  },
});

export const {
  setReward, setLevels, setActiveLevelId, setNextLevelId,
} = gameProgressSlice.actions;

export const selectGameProgress = (state: TRootState):
IGameProgressState => state.gameProgressReducer;

export default gameProgressSlice.reducer;
