import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    data: productReducer,
    cart: cartReducer,
  },
});
