import { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
 
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // console.log("Expenses ", selectedYear)
    }

    const expenses = props.expenses.map( (expense) => {
        return (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />);
    });
 
    return (
        <Card className="expenses">
            <ExpenseFilter currentSelectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenses}
        </Card>)
}
 
export default Expenses;