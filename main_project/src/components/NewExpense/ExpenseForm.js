import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({ 
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {...previousState, enteredTitle: event.target.value}
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {...previousState, enteredAmount: event.target.value}
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {...previousState, enteredDate: event.target.value}
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({ 
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: ""
        });
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2025-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;