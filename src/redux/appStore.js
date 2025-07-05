import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'
import moviesReducer from './moviesSlice';

export const appStore = configureStore({
  reducer: {
    app: appReducer,
    movies : moviesReducer
  },
});

