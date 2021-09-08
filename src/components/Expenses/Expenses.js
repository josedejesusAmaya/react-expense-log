import React, {useState} from "react";

import "./Expenses.css";
import Card from '../UI/Card'; 
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2021');

  const storeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={year} onChangeYear={storeYearHandler} />
      <ExpensesList list={items} selectedYear={year}/>
    </Card>
  );
}

export default Expenses;
