import {createSlice} from '@reduxjs/toolkit'

const initialState ={
  categoryId: null,
  tagId:0,
}


const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload
      console.log(action.payload);
    },
    setTagId(state, action){
      console.log('action',action);
      state.tagId = action.payload;
    }
  }

})

export const {setCategoryId,setTagId} = filterSlice.actions
export default filterSlice.reducer