import {createAsyncThunk} from '@reduxjs/toolkit';
import auth, {firebase} from '@react-native-firebase/auth';
import {setLoading} from '../loading/loadingSlice';
import {updateUser} from '../user/userSlice';

interface AuthInterface {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: AuthInterface, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      let res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res);
      dispatch(updateUser(res.user.toJSON() as any));
      return await res.user.getIdToken();
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({email, password}: AuthInterface, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      let res = await auth().createUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {
      console.error(error);
      return error;
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (e, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      let res = await auth().signOut();
      return res;
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);
