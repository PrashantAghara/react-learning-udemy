import { useState } from "react";
import Form from "./Form";
import "./NewExpense.css";

const NewExpense = ({ newExpenseDataAdder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  const onNewExpenseData = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    newExpenseDataAdder(data);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <Form stopEditing={stopEditing} onNewExpenseData={onNewExpenseData} />
      )}
    </div>
  );
};

export default NewExpense;
