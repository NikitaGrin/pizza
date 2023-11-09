import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
