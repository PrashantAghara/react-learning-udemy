const redux = require("redux");

const counterReducer = (curr = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: curr.counter + 1,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: curr.counter - 1,
    };
  }
  return curr;
};

const store = redux.createStore(counterReducer);

const counterSub = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(counterSub);
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
