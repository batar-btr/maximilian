import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import Button from '../UI/Button'
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
    <Button onClick={buttonClickHandler}>New Expense</Button> :
    <ExpenseForm onAddExpense={onAddExpenseHandler} onCancelHandler={buttonClickHandler} />

  return (
    <div className='new-expense'>
      {content}
    </div>
  );
};

export default NewExpense;
