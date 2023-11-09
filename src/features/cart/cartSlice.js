import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalPizzas: 0,
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
      const item = state.items.find((item) => item.id === action.payload.id);
      state.totalPrice -= item.unitPrice * item.quantity;
      /* state.totalPrice -=
        +action.payload.unitPrice * state.items[action.payload].quantity; */
      state.items = state.items.filter((el) => {
        if (el.id !== action.payload.id) return el;
      });
    },
    increaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
      state.totalPrice += item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity--;
      if (item.quantity !== 0) state.totalPrice -= item.unitPrice;
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
