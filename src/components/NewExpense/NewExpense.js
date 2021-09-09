import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpenseData}) => {
    let newExpenseContent = null;
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseItem = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        onAddExpenseData(expenseItem);
    };

    const editHandler = () => {
        setIsEditing((prevState) => {
            return !prevState;
        });
    };

    isEditing 
        ? newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onEditHandler={editHandler} /> 
        : newExpenseContent = <button type="button" onClick={editHandler}>Add New Expense</button>;

    return (
        <div className="new-expense">
            { newExpenseContent }
        </div>
    );
}

export default NewExpense;
