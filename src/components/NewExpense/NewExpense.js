import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(true);

  const onAddExpenseHandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    }
    props.addNew(newExpense)
  }

  const buttonClickHandler = () => {
    setShowForm(prevState => !prevState);
  }

  let content = showForm ?
    <button onClick={buttonClickHandler}>New Expense</button> :
    <ExpenseForm onAddExpense={onAddExpenseHandler} onCancelHandler={buttonClickHandler} />

  return (
    <div className='new-expense'>
      {content}
    </div>
  );
};

export default NewExpense;
