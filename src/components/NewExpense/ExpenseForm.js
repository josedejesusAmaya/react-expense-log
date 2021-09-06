import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(new Date(userInput.date));
    setUserInput({
        title: "",
        amount: "",
        date: "",
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <button type="submit" className="new-expense__actions">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
