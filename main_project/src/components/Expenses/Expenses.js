import { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
 
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter( (expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter currentSelectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>)
}
 
export default Expenses;