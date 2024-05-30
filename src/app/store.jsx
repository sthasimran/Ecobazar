import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/slices/CartSlice";
import productsReducer from "../features/slices/ProductSlice";


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store