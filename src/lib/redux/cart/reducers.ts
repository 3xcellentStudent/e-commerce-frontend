import { createSlice } from "@reduxjs/toolkit";
import { CartStateActionsType } from "./types";
import { ProductVariationModel } from "@/types/api/product/variation/product.variation.model";

// const initialState: ProductVariationModel[] = []
const initialState: ProductVariationModel[] = [
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5982",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 100,
			"price": "27.99",
			"quantityAvailable": 100
		},
		"variationName": "Lavender Oil Organic",
		"productOptions": [],
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233
	},
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5982",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 100,
			"price": "27.99",
			"quantityAvailable": 100
		},
		"variationName": "Lavender Oil Organic",
		"productOptions": [],
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233
	},
  {
		"id": "780b396e-5151-3f91-8ed7-07e2e7ff5982",
		"parentId": "55fe9ff8-5513-4216-972b-48a0fb3bfcfe",
		"stockInfo": {
			"quantityMax": 100,
			"price": "27.99",
			"quantityAvailable": 100
		},
		"variationName": "Lavender Oil Organic",
		"productOptions": [],
		"image": [
			{
				"media": "",
				"src": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/500x659/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2",
				"srcset": "https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/80w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 80w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/160w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 160w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/320w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 320w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/640w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 640w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/960w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 960w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1280w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1280w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/1920w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 1920w, https://cdn11.bigcommerce.com/s-csmahfsamh/images/stencil/2560w/products/25202/25877/1Cream-Base-with-Jojoba-Cosmetic-Base__92588.1764270590.jpg?c=2 2560w"
			},
		],
		"collectionName": "variation-essential-oils",
		"createdAt": 1764743047643,
		"updatedAt": 1768173892233
	}
]

const slice = createSlice({
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

export const {add, remove} = slice.actions;

export default slice.reducer;