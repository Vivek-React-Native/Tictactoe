import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  IsAuth: true,
};

const LoginReducer = createSlice({
  name: 'Login',
  initialState: initialState,
  reducers: {
    SetIsAuth: (state, action) => {
      state.IsAuth = action.payload;
    },
  },
});

export const { SetIsAuth } = LoginReducer.actions;

export default LoginReducer.reducer;
