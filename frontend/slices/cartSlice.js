import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      let addQuantityItem = state.cartItems.find((item) => item._id === action.payload);
      addQuantityItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      let subtractQuantityItem = state.cartItems.find((item) => item._id === action.payload);
      if (subtractQuantityItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
      } else {
        subtractQuantityItem.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
