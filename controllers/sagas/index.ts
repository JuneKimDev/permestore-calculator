import { all, spawn, call } from 'redux-saga/effects';
import requestSaga from './requestSaga';
import priceSaga from './priceSaga';

const rootSaga = function* () {
  const sagas: any[] = [requestSaga, priceSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
};

export default rootSaga;
