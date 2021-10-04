import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const onAddExpenseHandler = (expense) => {
    props.addNew(expense);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={onAddExpenseHandler} />
    </div>
  );
};

export default NewExpense;
