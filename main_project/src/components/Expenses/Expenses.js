import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
 
function Expenses(props) {
 
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
        {expenses}
    </Card>)
}
 
export default Expenses;