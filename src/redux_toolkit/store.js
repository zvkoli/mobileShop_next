import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./features/apiDataSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    cart: cartReducer
  },
});

export default store;
