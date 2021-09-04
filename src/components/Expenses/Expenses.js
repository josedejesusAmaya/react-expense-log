import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'; 

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((item, index) => {
        return (<ExpenseItem key={index} item={item} />)
      })}
    </Card>
  );
}

export default Expenses;
