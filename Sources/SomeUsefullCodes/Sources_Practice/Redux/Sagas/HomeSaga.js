import {call, put, takeEvery} from 'redux-saga/effects';
import {MovieData} from '../Apis/MovieData';
import * as Actions from '../Actions/HomeActions';

function* SuccessData() {
  try {
    const data = yield call(MovieData);

    console.log('data from Home Saga..............................', data);

    yield put(Actions.Success_Data(data));
  } catch (error) {
    console.log('Error from Home Saga......', error);
    yield put({type: Actions.Data_Fail, payload: error});
  }
}

export default function* HomeSage() {
  yield takeEvery(Actions.Data_Process, SuccessData);
}
