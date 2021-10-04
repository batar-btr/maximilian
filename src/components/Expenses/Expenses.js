import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === +filteredYear)

    return (
        <Card className="expenses">

            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            <ExpensesList items={filteredExpenses} />

            {/* {props.items.map()} */}

        </Card>
    );
}

export default Expenses;
