import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const slice = createSlice({
  name: 'productCarousel',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
    increase: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    decrease: (state, action: PayloadAction<number>) => {
      return state - action.payload;
    },
  },
});

export const {increase, decrease, change} = slice.actions;

export default slice.reducer;