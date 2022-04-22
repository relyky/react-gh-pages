import { configureStore } from '@reduxjs/toolkit'
import appInfo from './appInfoSlice'
import counter from './counterSlice'
import ap0102 from 'AppForm/AP0102/appSlice'

export default configureStore({
  reducer: {
    appInfo,
    counter,
    ap0102,
  },
  devTools: process.env.NODE_ENV !== 'production'
});