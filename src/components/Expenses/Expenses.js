import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
// importing useState HOOK from react to change the element reactively;
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020"); // 2022 here is just a default value or an initializer.
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  // .filter function return a new array if for those that make the condition true.
  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear !== "All") {
      return expense.Date.getFullYear().toString() === filteredYear;
    } else {
      return expense.Date;
    }
  });
  console.log("expense.js"); console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler} // handler function to hook the value entered in the ExpenseFilter and send it back
          selected={filteredYear} //send it back the filteredYear as a props.selected down to ExpenseFilter component
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
