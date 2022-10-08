// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

//With out Redux ToolKit
// const store = createStore(counterReducer);
// const counterReducer = (state = initial, action) => {
//   if (action.type === "INC") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.increment,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   if (action.type === "DEC") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   return state;
// };
