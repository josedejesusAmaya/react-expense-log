import React, {useState} from "react";

import "./Expenses.css";
import Card from '../UI/Card'; 
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2021');

  const storeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredItems = items.filter((expense) => expense.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={year} onChangeYear={storeYearHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList list={filteredItems}/>
    </Card>
  );
}

export default Expenses;
