import { createSlice } from "@reduxjs/toolkit";
import { CartStateActionsType } from "./types";
import {CartProductVariationModel} from "@/types/cart/variation/cart.variation.types";
import CartEntityDto from "@/dto/cart/cart.entity.dto";
import {enqueueSnackbar} from "@/lib/redux/snackbar/reducers"
import { useAppDispatch } from "../hooks";
import exampleData from "./data.example.json"

// const initialState: ProductVariationModel[] = []
const initialState: CartProductVariationModel[] = exampleData;

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: CartStateActionsType["add"]) => {
			const newCartEntity = new CartEntityDto(action.payload);
      state.push(newCartEntity);
      return state;
      // console.log('after', current(state))
    },
    remove: (state, action: CartStateActionsType["remove"]) => {
			return state.filter(({id}) => id !== action.payload);
    },
    increase: (state, action: CartStateActionsType["counter"]) => {
      if(state[action.payload].customerSelectedQuantity + 1 <= state[action.payload].stockInfo.quantityAvailable){
        state[action.payload].customerSelectedQuantity++;
				return state;
      } else {
				const dispatch = useAppDispatch();
				dispatch(enqueueSnackbar({message: "You have maximum of available amount !", severity: "info"}))
				return state;
      }
    },
		decrease: (state, action: CartStateActionsType["counter"]) => {
			if(state[action.payload].customerSelectedQuantity - 1 > 0){
				state[action.payload].customerSelectedQuantity--;
				return state;
			}
		}
  },
});

export const {add, remove, increase, decrease} = slice.actions;

export default slice.reducer;