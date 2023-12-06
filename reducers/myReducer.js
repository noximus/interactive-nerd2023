// reducers/myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: {
    menuOpen: false,
    socialOpen: false,
  },
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
    decrement: (state) => {
      state.age -= 1;
    },
  },
});

export const { increment, decrement } = mySlice.actions;

export default mySlice.reducer;
