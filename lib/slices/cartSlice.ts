import { ProductVariationModel } from '@/types/schema/product/variation/product.variation.type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type StoreProductVariationModel = {customerQuantity: number} & ProductVariationModel;

export type StoreProductVariationMap = Map<string, StoreProductVariationModel>;

const cartSlice = createSlice({
  name: 'cart',
  initialState: new Map() as StoreProductVariationMap,
  reducers: {
    add(state, action: PayloadAction<StoreProductVariationModel>){
      if(state.has(action.payload.id)){
        if((state.get(action.payload.id) as StoreProductVariationModel).customerQuantity + action.payload.customerQuantity <= action.payload.stockInfo.amountAvailable){
          state.set(action.payload.id, {
            ...state.get(action.payload.id),
            customerQuantity: (state.get(action.payload.id) as StoreProductVariationModel).customerQuantity + action.payload.customerQuantity
          } as StoreProductVariationModel)
        } else {
        }
      } else {
        state.set(action.payload.id, action.payload);
      }
    },
    remove(state, action: PayloadAction<StoreProductVariationModel>) {
      state.delete(action.payload.id);
    },
    get(state, action: PayloadAction<StoreProductVariationModel>){
      state.get(action.payload.id) as StoreProductVariationModel;
    }
  }
})

export const {remove, add, get} = cartSlice.actions;
export default cartSlice.reducer;
