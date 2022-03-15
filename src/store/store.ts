import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import loadingSlice from './loading/loadingSlice';
import userReducer from './user/userSlice';

const middlewares: Array<any> = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    loading: loadingSlice,
    auth: authSlice,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export {store};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
