import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/reducers'
import snackbarReducer from './snackbar/reducers'
import productCarousel from "./product/carousel/reducers"

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      snackbar: snackbarReducer,
      productCarousel: productCarousel,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']