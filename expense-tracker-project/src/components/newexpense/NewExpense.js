import Form from "./Form";
import "./NewExpense.css";

const NewExpense = ({ newExpenseDataAdder }) => {
  const onNewExpenseData = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    newExpenseDataAdder(data);
  };
  return (
    <div className="new-expense">
      <Form onNewExpenseData={onNewExpenseData} />
    </div>
  );
};

export default NewExpense;
