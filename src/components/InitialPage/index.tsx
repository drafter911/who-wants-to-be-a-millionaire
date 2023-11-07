import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../shared/components/Banner';
import { IAppState, selectAppState, startTheGame } from '../../_store';
import Loader from '../../shared/components/Loader';

function InitialPage() {
  const { loading, error }: IAppState = useSelector(selectAppState);
  const dispatch = useDispatch();
  const initGameStart = startTheGame();
  return (
    <>
      {loading && <Loader text="Loading..." />}
      <Banner
        title="Who wants to be a millionaire?"
        buttonText="Start"
        onButtonClick={async (): Promise<void> => {
          await initGameStart(dispatch);
        }}
        errorMessage={error}
      />
    </>
  );
}

export default InitialPage;
