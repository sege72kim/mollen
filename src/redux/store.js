import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import statesReducer from "./statesSlice";
export const store = configureStore({
  reducer: {
    data: productReducer,
    cart: cartReducer,
    states: statesReducer,
  },
});
