import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import { DetailProduct } from './slice/detailSlice';
import { AccessoryProduct, LaptopProduct, PcProduct, PhoneProduct } from './slice/productSlice';
import cartReducer from './slice/cartSlice';
// import { SearchProduct } from './slice/searchSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    phone: PhoneProduct,
    laptop: LaptopProduct,
    accessory: AccessoryProduct,
    pc: PcProduct,
    // search: SearchProduct,
    detail: DetailProduct,
    cart: cartReducer,
  },
});

export default store;
