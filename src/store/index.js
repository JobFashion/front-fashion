import { configureStore } from '@reduxjs/toolkit';
import { axiosMiddleware } from '../services/interceptorsMiddleware';
import authReducer from './auth/authSlice';
import postReducer from './post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(axiosMiddleware);
  },
  devTools: true,
});
