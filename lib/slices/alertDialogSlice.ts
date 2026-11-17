import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  productId: string;
}

const alertDialogSlice = createSlice({
  name: 'alert/dialog',
  initialState: {} as State,
  reducers: {
    isOpen(state, {payload}: PayloadAction<{id: string}>){
      
    }
  }
})

export const {isOpen} = alertDialogSlice.actions;
export default alertDialogSlice.reducer;