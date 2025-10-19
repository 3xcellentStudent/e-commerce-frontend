import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import globalDataReducer from './database/globalData/reducer';
import productDataReducer from './database/productData/reducer';
import shippingReducer from './payment/reducer';

const rootReducer = combineReducers({
  cartObject: cartReducer,
  globalData: globalDataReducer,
  productData: productDataReducer,
  shipping: shippingReducer,
});

export default rootReducer;