import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/reducers'
import snackbarReducer from './snackbar/reducers'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      snackbar: snackbarReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']