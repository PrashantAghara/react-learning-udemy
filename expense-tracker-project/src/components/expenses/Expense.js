import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const Expense = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expense;
