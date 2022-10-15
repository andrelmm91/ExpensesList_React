import React from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

function NewExpenses(props) {
  // retrieving the info from the child ExpenseForm back to here, we create a Handler function and send it as props to the form.
  function saveExpenseDataHandler(enteredExpenseData) {
    // const expenseData = { ...enteredExpenseData, id: Math.random().toString() };

    // console.log('in NewExpenses.js'); console.log(enteredExpenseData);
    // handler function to send the data back to the parent
    props.onAddExpense(enteredExpenseData);
  }

  return (
    <div className="new-expense">
      {/* onSaveExpenseData is a function that will be triggered when the data is saved. we only point to the function, we dont execute it by having () at the end*/}
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpenses;
