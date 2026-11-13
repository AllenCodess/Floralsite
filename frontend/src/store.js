import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../slices/cartSlice";
import authReducer from "./../slices/authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
