import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

// NEW: same product AND same size
const isSameItem = (item, _id, size) => item._id === _id && item.size === size;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { _id, size, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => isSameItem(item, _id, size));
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const { _id, size } = action.payload;
      state.cartItems = state.cartItems.filter((item) => !isSameItem(item, _id, size));
    },
    increaseQuantity: (state, action) => {
      const { _id, size } = action.payload;
      const addQuantityItem = state.cartItems.find((item) => isSameItem(item, _id, size));
      addQuantityItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const { _id, size } = action.payload;
      const subtractQuantityItem = state.cartItems.find((item) => isSameItem(item, _id, size));
      if (subtractQuantityItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => !isSameItem(item, _id, size));
      } else {
        subtractQuantityItem.quantity -= 1;
      }
    },
    // NEW: you'll need this after payment succeeds (step 7)
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
