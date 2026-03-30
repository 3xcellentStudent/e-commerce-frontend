import { createSlice } from "@reduxjs/toolkit";
import { CartStateActionsType } from "./types";
import {CartProductVariationModel} from "@/types/cart/variation/cart.variation.types";
import CartEntityDto from "@/dto/cart/cart.entity.dto";
import {enqueueSnackbar} from "@/lib/redux/snackbar/reducers"
import { useAppDispatch } from "../hooks";

// const initialState: ProductVariationModel[] = []
const initialState: CartProductVariationModel[] = [
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5981",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 10,
			"price": "27.99",
			"quantityAvailable": 10
		},
		"variationName": "Lavender Oil Organic",
		"variationOptions": {
			"name": "50ml",
			"type": "Size",
			"value": "",
		},
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233,
		"customerSelectedQuantity": 1,
	},
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5982",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 8,
			"price": "27.99",
			"quantityAvailable": 6
		},
		"variationName": "Lavender Oil Organic",
		"variationOptions": {
			"name": "50ml",
			"type": "Size",
			"value": "",
		},
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233,
		"customerSelectedQuantity": 1,
	},
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5983",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 3,
			"price": "27.99",
			"quantityAvailable": 3
		},
		"variationName": "Lavender Oil Organic",
		"variationOptions": {
			"name": "50ml",
			"type": "Size",
			"value": "",
		},
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233,
		"customerSelectedQuantity": 1,
	}
]

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