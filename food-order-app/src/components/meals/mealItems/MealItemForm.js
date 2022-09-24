import React, { useRef, useState } from "react";
import Input from "../../ui/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amount = +enteredAmount;
    if (enteredAmount.trim().length === 0 || amount < 1 || amount > 5) {
      setIsValid(false);
      return;
    }
    onAddToCart(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please Enter valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
