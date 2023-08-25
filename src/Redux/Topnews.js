import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value:{
   news:[],
   top:[],
   single:[]
  }
  }
  export const newSlice = createSlice({
    name: 'newsreader',
    initialState,
    reducers: {
      addnews: (state, action) => {

        state.value.news= action.payload
      },
      latenews: (state, action) => {

        state.value.top= action.payload
      },
      singlenews: (state, action) => {

        state.value.single= action.payload
      },
     
    },
  })
  export const {addnews,latenews,singlenews} = newSlice.actions

export default newSlice.reducer