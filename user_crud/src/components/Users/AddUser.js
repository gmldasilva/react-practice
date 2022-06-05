import React, {useState} from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [formValues, setFormValues] = useState({username:'', age: ''});
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (formValues.username.trim().length === 0 || formValues.age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        
        if (formValues.age < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age greater then 0.'
            });
            return;
        }

        console.log(formValues.username, formValues.age)
        props.onAddUser({...formValues, id: Math.random().toString()});
        setFormValues({username:'', age: ''})
    };

    const valueChangeHandler = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    };

    const errorHandler = () => {
        setError('');
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}> 
                {/*Pointer to the function*/}
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" value={formValues.username} onChange={valueChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input name="age" type="number" value={formValues.age} onChange={valueChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;