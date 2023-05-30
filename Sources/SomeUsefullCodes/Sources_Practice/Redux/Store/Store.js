import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import RootReducer from '../Reducers/RootReducers';
import RootSaga from '../Sagas';

import thunk from 'redux-thunk';

const SagaMiddleware = createSagaMiddleware();

const Store = createStore(RootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(RootSaga);

export default Store;
