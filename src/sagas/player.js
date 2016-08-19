import { take, call, fork, put, select } from 'redux-saga/effects';
import { addPlayer } from '../actions/player';


export function* requestName() {
  for (let i = 1; i <= 2; i++) {
    const name = yield call(() => window.prompt(`Please, enter Player #${i} name:`));

    if (typeof name === 'string' && name.length > 0) {
      const id = btoa(Date.now()).substr(0, 10);
      yield put(addPlayer(id, name));
    }
  }
}
