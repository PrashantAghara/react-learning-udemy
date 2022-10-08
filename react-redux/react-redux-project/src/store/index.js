import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.increment,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "TOGGLE") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
