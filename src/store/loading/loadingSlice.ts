import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: boolean = false;

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      const {payload} = action;
      state = payload;
      return state;
    },
  },
});

export const getLoading = (state: RootState) => state.loading;

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
