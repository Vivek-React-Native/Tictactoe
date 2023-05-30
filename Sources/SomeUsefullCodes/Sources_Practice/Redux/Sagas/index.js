import {all} from 'redux-saga/effects';
import HomeSaga from './HomeSaga';

export default function* RootSaga() {
  yield all([HomeSaga()]);
}
