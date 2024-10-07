import { createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
  name: "states",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = statesSlice.actions;
export default statesSlice.reducer;
