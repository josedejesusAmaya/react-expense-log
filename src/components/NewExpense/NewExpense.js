import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpenseData}) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseItem = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        onAddExpenseData(expenseItem);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;
