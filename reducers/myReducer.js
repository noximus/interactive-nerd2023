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
    toggleMenuOpen: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    toggleShareOpen: (state) => {
      state.shareOpen = !state.shareOpen;
    },
  },
});

export const { toggleMenuOpen, toggleShareOpen } = mySlice.actions;

export default mySlice.reducer;
