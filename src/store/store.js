import { configureStore } from '@reduxjs/toolkit'
import appInfoReducer from './appInfoSlice'
import counterReducer from './counterSlice'
import ap0101Reducer from '../AppForm/AP0101/appSlice'

export default configureStore({
  reducer: {
    appInfo: appInfoReducer,
    counter: counterReducer,
    ap0101: ap0101Reducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});