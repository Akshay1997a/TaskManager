import {createAsyncThunk} from '@reduxjs/toolkit';
import auth, {firebase} from '@react-native-firebase/auth';
import {setLoading} from '../loading/loadingSlice';
import {updateUser} from '../user/userSlice';
import {Alert} from '../../components/Alert/AlertProvider';
import {AUTH_ERRORS} from '../../config/FirebaseErrorCodes';
import MESSAGES from '../../config/messages';

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
      dispatch(updateUser(res.user.toJSON() as any));
      return await res.user.getIdToken();
    } catch (error: any) {
      console.error(error);
      switch (error.code) {
        case AUTH_ERRORS.INVALID_EMAIL:
          Alert.show(MESSAGES.INVALID_EMAIL_ID);
          break;

        case AUTH_ERRORS.USER_NOT_FOUND:
          Alert.show(MESSAGES.INVALID_EMAIL_ID);
          break;

        case AUTH_ERRORS.WRONG_PASSWORD:
          Alert.show(MESSAGES.INVALID_EMAIL_ID);
          break;

        case AUTH_ERRORS.TOO_MANY_REQUESTS:
          Alert.show(MESSAGES.REQUEST_BLOCK);
          break;

        default:
          Alert.show(MESSAGES.ERROR);
      }
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
