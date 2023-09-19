import React from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const SaveExpanseDataHandler = (enteredExpenseData) => {
        const expanseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseData);
    };

    return ( 
    <div className="new-expense">
     <ExpenseForm onSaveExpanseData = {SaveExpanseDataHandler} />   

    </div>

    );
};
export default NewExpense;