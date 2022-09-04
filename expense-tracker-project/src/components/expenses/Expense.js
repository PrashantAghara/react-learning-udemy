import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expense = ({ expenses }) => {
  const [year, setYear] = useState("2020");
  const onYearChange = (year) => {
    setYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} yearChange={onYearChange} />
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
    </div>
  );
};

export default Expense;
