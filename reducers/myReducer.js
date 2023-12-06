// reducers/myReducer.js
import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myFeature',
  initialState: {
    name: 'henry',
    lastName: 'test',
    age: 6,
    isFetching: false,
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
