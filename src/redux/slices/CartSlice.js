import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    initCartLocal: (state, action) => {
      return action.payload;
    },
    checkOutCart: (state, action) => {
      return []
    }
  },
});

export const { addToCart, initCartLocal, checkOutCart } = CartSlice.actions;

export default CartSlice.reducer;
