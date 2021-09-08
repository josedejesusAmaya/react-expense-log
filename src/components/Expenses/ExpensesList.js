import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ list, selectedYear }) => {
  if (list.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
        {list
            .filter((expense) => expense.date.getFullYear().toString() === selectedYear)
            .map((item) => <ExpenseItem key={item.id} item={item} />)
        }
    </ul>
  );
};

export default ExpensesList;
