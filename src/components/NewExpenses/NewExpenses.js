import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  // retrieving the info from the child ExpenseForm back to here, we create a Handler function and send it as props to the form.
  function saveExpenseDataHandler(enteredExpenseData) {
    // const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    // console.log('in NewExpenses.js'); console.log(enteredExpenseData);
    // handler function to send the data back to the parent
    props.onAddExpense(enteredExpenseData);
    // setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }
  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {/* onSaveExpenseData is a function that will be triggered when the data is saved. we only point to the function, we dont execute it by having () at the end*/}
      {isEditing && <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
}

export default NewExpenses;
