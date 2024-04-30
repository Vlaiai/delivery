import {createSlice} from '@reduxjs/toolkit'

const initialState ={
  totalPrice:0,
  items:[],
}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     addItem(state, action){
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if(findItem){
        findItem.amount++;
      }
      else{
        state.items.push({...action.payload,
        amount: 1})
      }
      state.totalPrice =state.items.reduce((sum, obj) =>{
          return (obj.price * obj.amount) + sum;
        },0)
     },

    removeItem(state, action){
      const findItem = state.items.find(obj => obj.id === action.payload.id);
        if(findItem){
          if(findItem.amount <=1){
            state.items = state.items.filter(item => item.id !== action.payload.id);
            console.log( state.items);
          } else {
            findItem.amount--;
          }
          state.totalPrice = state.items.reduce((sum, obj) => {
            return (obj.price * obj.amount) + sum;
          }, 0);
       }
    },

    clearItem(state,action){
      state.items=[]
    }
  }



})

export const {addItem,removeItem,clearItem} = cartSlice.actions
export default cartSlice.reducer