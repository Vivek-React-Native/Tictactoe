import { configureStore } from '@reduxjs/toolkit';
import { LoginReducer } from './Reducers';
const Store = configureStore({
  reducer: {
    LoginReducer,
  },
});
export default Store;
