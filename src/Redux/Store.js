import { configureStore } from '@reduxjs/toolkit'
import newReducer from './Topnews'


export const store = configureStore({
  reducer: {
    
    newsreader:newReducer,

  },
})