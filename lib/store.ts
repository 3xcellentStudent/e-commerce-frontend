import { configureStore } from '@reduxjs/toolkit'

import cartReducer from "./slices/cartSlice"
import alertDialogSlice from "./slices/alertDialogSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      alertDialog: alertDialogSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']