import React, { useState } from "react";
import "./ExpensesForm.css";

// props here is that Handler function we created in the NewExpenses to handle the new data
function ExpensesForm(props) {
  const [useInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    // in this manner, it is a safer way to ensure that we operate on the latest snapshot.
    setUserInput(function (prevState) {
      return { ...prevState, enteredTitle: event.target.value };
    });
  }
  function amountChangeHandler(event) {
    // in this manner, it is a safer way to ensure that we operate on the latest snapshot.
    setUserInput(function (prevState) {
      return { ...prevState, enteredAmount: event.target.value };
    });
  }
  function dateChangeHandler(event) {
    // in this manner, it is a safer way to ensure that we operate on the latest snapshot.
    setUserInput(function (prevState) {
      return { ...prevState, enteredDate: event.target.value };
    });
  }
  function submitHandler(event) {
    event.preventDefault(); // preventing that the page is reloading when we submit the form

    // creating an array for sending it back, correcting date format.
    const expenseData = {
      Title: useInput.enteredTitle,
      Amount: +useInput.enteredAmount,
      Date: new Date(useInput.enteredDate),
    };

    // we activate the handler function to send the data back to NewExpenses
    // console.log('in ExpenseForm.js'); console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    //reset all variables
    setUserInput(function () {
      return { enteredTitle: "", enteredAmount: "", enteredDate: "" };
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={useInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={useInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={useInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpensesForm;
