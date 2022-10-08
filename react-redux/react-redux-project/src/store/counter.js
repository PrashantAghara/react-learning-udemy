import { createSlice } from "@reduxjs/toolkit";
const initialCounter = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export default counterSlice;
