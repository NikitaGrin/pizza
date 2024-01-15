import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.totalPrice += +action.payload.unitPrice;
      state.items.push({
        ...action.payload,
        quantity: 1 + (state.items.quantity ? state.items.quantity : 0),
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getItemQuantity = (id) => (state) =>
  state.cart.items.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const getTotalCartQuantity = (state) =>
  state.cart.items.reduce((sum, item) => (sum += item.quantity), 0);
export const getTotalPrice = (state) =>
  state.cart.items.reduce(
    (sum, item) => (sum += item.quantity * item.unitPrice),
    0,
  );
