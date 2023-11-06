import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    test: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = cartSlice.actions;

export default cartSlice.reducer;
