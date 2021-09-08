import React, {useState} from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'; 
import ExpenseFilter from "./ExpenseFilter";

function Expenses({ items }) {
  const [year, setYear] = useState('2021');

  const storeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={year} onChangeYear={storeYearHandler} />
      {items.map((item) => {
        return (<ExpenseItem key={item.id} item={item} />)
      })}
    </Card>
  );
}

export default Expenses;
