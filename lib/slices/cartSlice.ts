import { ProductVariationModel } from '@/types/schema/product/variation/product.variation.type'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// export type StoreProductVariationModel = {customerQuantity: number} 
// & Omit<ProductVariationModel, 'createdAt' | 'updatedAt'> 
// & {createdAt: string | Date; updatedAt: string | Date;};

export type StoreProductVariationModel = {customerQuantity: number; isChecked: boolean} & ProductVariationModel; 

export type StoreProductVariationRecord = Record<string, StoreProductVariationModel>;

// type ChangeQuantityType = PayloadAction<{id: string, customerQuantity: number}>;

const cartSlice = createSlice({
  name: 'cart',
  initialState: {} as StoreProductVariationRecord,
  reducers: {
    add(state, action: PayloadAction<StoreProductVariationModel>){
      const itemFromStore = state[action.payload.id] as StoreProductVariationModel;
      if(!!itemFromStore){
        const newQuantity = itemFromStore.customerQuantity + action.payload.customerQuantity;
        if(newQuantity <= action.payload.stockInfo.amountAvailable){
          state[action.payload.id] = {...itemFromStore, customerQuantity: newQuantity};
        }
      }
      else {
        state[action.payload.id] = {...action.payload, customerQuantity: action.payload.customerQuantity};
      }
    },
    remove(state, {payload: id}: PayloadAction<string>){
      if(!!state[id]){
        delete state[id];
      } else {}
    },
    isChecked(state, {payload: id}: PayloadAction<string>){
      state[id].isChecked = !state[id].isChecked;
    },
    increase(state, {payload: id}: PayloadAction<string>){
      const itemFromStore = state[id];
      const newQuantity = ++itemFromStore.customerQuantity
      if(!!itemFromStore && newQuantity <= itemFromStore.stockInfo.amountAvailable){
        state[id] = {...itemFromStore, customerQuantity: newQuantity};
      }
    },
    decrease(state, {payload: id}: PayloadAction<string>){
      const itemFromStore = state[id];
      const newQuantity = itemFromStore.customerQuantity - 1
      if(!!itemFromStore && newQuantity > 0){
        state[id] = {...itemFromStore, customerQuantity: newQuantity};
      }
    }
  },
})

export const {remove, add, isChecked, increase, decrease} = cartSlice.actions;
export default cartSlice.reducer;
