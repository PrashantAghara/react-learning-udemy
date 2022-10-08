import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incCounter = () => {
    dispatch({ type: "INC" });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", increment: 5 });
  };

  const decCounter = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incCounter}>INC</button>
            <button onClick={increaseHandler}>INC BY 5</button>
            <button onClick={decCounter}>DEC</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
