import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
 "products/fetchUserById",
 async(params)=>{
  const {category, search} = params;
  const {data} = await axios.get(`https://660affe2ccda4cbc75dc3d30.mockapi.io/items?${category}${search}`);
  return data
 },



)



const initialState ={
  items:[],
  status: '',
}


const productsSlice = createSlice({
  name: 'products',
  initialState,



  reducers: {
    setItems(state,action){
    state.items = action.payload
    }
  },


  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = "success"
      console.log("success");
    })
    .addCase(fetchProducts.rejected, (state) => {
      state.status = "error"
      state.items = []
      console.log("error");
    })
    // .addCase(fetchProducts.pending, (state) => {
      //     state.status = "loading"
      //     state.items = []
      //     console.log("loading");
      // })
  } 


})

export const {setItems} = productsSlice.actions
export default productsSlice.reducer