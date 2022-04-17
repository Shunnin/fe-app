import { all, fork } from 'redux-saga/effects';

import weatherSaga from '../weather/saga';

export const rootSaga = function* () {
  try {
    yield all([fork(weatherSaga)]);
  } catch (e) {
    // ...
  }
};
