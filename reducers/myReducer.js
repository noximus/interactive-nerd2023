// reducers/myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: { value: 20 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = mySlice.actions;

export default mySlice.reducer;