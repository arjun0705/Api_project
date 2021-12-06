import { createSlice } from '@reduxjs/toolkit'
const initialState={
  data:[]
}
export const apiSlice = createSlice({
  name: 'APIapp',
  initialState,
  reducers: {
          getdata:(state,action)=>{
            state.data=action.payload
            console.log(state.data)
            
          }


  },
})

// Action creators are generated for each case reducer function
export const { getdata } = apiSlice.actions

export default apiSlice.reducer