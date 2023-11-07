import React from 'react';
import { useSelector } from 'react-redux';
import InitialPage from './components/InitialPage';
import GamePage from './components/GamePage';
import GameOverPage from './components/GameOverPage';
import { IAppState, selectAppState } from './_store';
import { APP_PAGE_TYPES } from './shared/constants';

function App() {
  const { activePage }: IAppState = useSelector(selectAppState);

  /*
  * App navigation could be implemented by using react-router-dom or other routing library.
  * */
  if (activePage === APP_PAGE_TYPES.RESULT) return <GameOverPage />;
  if (activePage === APP_PAGE_TYPES.GAME) return <GamePage />;
  return <InitialPage />;
}

export default App;
