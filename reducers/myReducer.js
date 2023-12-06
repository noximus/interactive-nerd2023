// reducers/myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: {
    menuOpen: false,
    shareOpen: false,
    shareAnim: false,
  },
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
    decrement: (state) => {
      state.age -= 1;
    },
    toggleMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleShareOpen: (state) => {
      state.shareOpen = !state.shareOpen;
      state.shareAnim = !state.shareAnim;
    },
  },
});

export const { increment, decrement, toggleMenuOpen, toggleShareOpen } = mySlice.actions;

export default mySlice.reducer;
