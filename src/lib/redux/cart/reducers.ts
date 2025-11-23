import { createSlice } from "@reduxjs/toolkit";
import { CartStateType, CartStateActionsType } from "./types";

const initialState: CartStateType[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: CartStateActionsType["add"]) => {
      state.push(action.payload)
      return state;
      // console.log('after', current(state))
    },
    remove: (state, action: CartStateActionsType["remove"]) => {
      return state.splice(action.payload, 1)
    },
    // increaseQuantity: (state, action: CartStateActionsType["increaseQuantity"]) => {
    //   const product = state[action.payload];
    //   if(product.stockInfo + 1 <= product.quantityMax){
    //     product.quantity++;
    //   } else {
    //   }
    // }
  },
});

export const {add, remove} = cartSlice.actions;

export default cartSlice.reducer;