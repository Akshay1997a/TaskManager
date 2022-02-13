import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserState extends FirebaseAuthTypes.UserInfo {}

const initialState: UserState = {
  uid: '',
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      state = {...state, ...action.payload};
      return state;
    },
  },
});

export const getUser = (state: RootState) => state.user;

export const {updateUser} = userReducer.actions;
export default userReducer.reducer;
