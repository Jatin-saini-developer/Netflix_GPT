import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'

export const appStore = configureStore({
  reducer: {
    app: appReducer
  },
});

