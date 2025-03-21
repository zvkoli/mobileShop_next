import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const productIndex = state.findIndex(item => item.id === product.id);

      if (productIndex !== -1) {
        state = state.map((item, index) =>
          index === productIndex
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        const updatedProduct = { ...product, count: 1 };
        state = [...state, updatedProduct];
      }

      return state;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const productIndex = state.findIndex(item => item.id === product.id);

      if (productIndex !== -1) {
        state = state.map((item, index) =>
          index === productIndex
            ? { ...item, count: item.count - 1 }
            : item
        );

        if (state[productIndex].count === 0) {
          state = state.filter((item, index) => index !== productIndex);
        }
      }

      return state;
    },
  },
});

export const { setCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

