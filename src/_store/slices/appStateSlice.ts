import { createSlice } from '@reduxjs/toolkit';
import { TPageType, TRootState } from 'app/types';
import { APP_PAGE_TYPES } from '../../shared/constants';

export interface IAppState {
  loading: boolean;
  error: string;
  activePage: TPageType;
}

const initialState: IAppState = {
  loading: false,
  error: '',
  activePage: APP_PAGE_TYPES.INITIAL,
};

const appStateSlice = createSlice({
  name: 'appStateSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    setActivePage: (state, action) => ({
      ...state,
      activePage: action.payload,
    }),
  },
});

export const { setLoading, setError, setActivePage } = appStateSlice.actions;

export const selectAppState = (state: TRootState): IAppState => state.appStateReducer;

export default appStateSlice.reducer;
