import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'; 
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2021');

  const storeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  let expensesContent = <p>No expenses found</p>;

  if (items.length > 0) {
    expensesContent = items
      .filter((expense) => expense.date.getFullYear().toString() === year)
      .map((item) => <ExpenseItem key={item.id} item={item} />);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={year} onChangeYear={storeYearHandler} />
      {/* {items.length === 0 && <p>No expenses found</p>}
      {items.length > 0 && 
        items
          .filter((expense) => expense.date.getFullYear().toString() === year)
          .map((item) => <ExpenseItem key={item.id} item={item} />)
      } */}
      { expensesContent }
    </Card>
  );
}

export default Expenses;
