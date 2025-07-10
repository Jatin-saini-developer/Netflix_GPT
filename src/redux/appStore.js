import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'
import moviesReducer from './moviesSlice';
import gptreducer from './GptSlice'

export const appStore = configureStore({
  reducer: {
    app: appReducer,
    movies : moviesReducer,
    gpt : gptreducer

  },
});

