import React, { Fragment, useState } from 'react';

import classes from './NewExpense.module.css'
import ExpenseForm from './ExpenseFrom';
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes['new-expense']}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
      <ExpenseForm
        onAddNewExpense={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    )}
    </div>
  );
};

export default NewExpense;