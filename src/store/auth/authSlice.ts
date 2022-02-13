import {createSlice} from '@reduxjs/toolkit';
import {setLoading} from '../loading/loadingSlice';
import {login} from './authThunks';

const initialState = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      const {payload}: any = action;
      state.accessToken = payload;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
