import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import loadingSlice from './loading/loadingSlice';
import userReducer from './user/userSlice';
import reduxLogger from 'redux-logger';

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    auth: authSlice,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reduxLogger),
});

export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
