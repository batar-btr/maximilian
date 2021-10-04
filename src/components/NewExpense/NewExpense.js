import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const onAddExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    }
    props.addNew(newExpense)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={onAddExpenseHandler} />
    </div>
  );
};

export default NewExpense;
