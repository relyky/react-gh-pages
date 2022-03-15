import { configureStore } from '@reduxjs/toolkit';
import appInfoReducer from './appInfoSlice';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    appInfo: appInfoReducer,
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});