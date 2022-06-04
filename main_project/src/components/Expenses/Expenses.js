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

    const filteredExpenses = props.expenses.filter( (expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // const expenses = props.expenses.map( (expense) => {
    //     return (
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //         );
    // });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter currentSelectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expensesContent}
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
            {/* {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
            ))} */}
            {/* {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
            filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )))} */}
        </Card>)
}
 
export default Expenses;