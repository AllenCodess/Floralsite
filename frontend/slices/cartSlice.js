import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if (existingItem) {
        return;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
