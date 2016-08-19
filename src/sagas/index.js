import { fork } from 'redux-saga/effects';

import { requestName } from './player';

export default function* root() {
  yield [
    fork(requestName)
  ]
}