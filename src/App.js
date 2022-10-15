import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

const expensesList = [
  { Title: "Car Insurance", Amount: 99, Date: new Date(2022, 2, 28) },
  { Title: "Dog Insurance", Amount: 528, Date: new Date(2021, 3, 28) },
  { Title: "House Insurance", Amount: 288, Date: new Date(2019, 4, 28) },
  { Title: "Bike Insurance1", Amount: 338, Date: new Date(2020, 7, 28) },
  { Title: "Bike Insurance2", Amount: 648, Date: new Date(2020, 7, 28) },
  { Title: "Bike Insurance3", Amount: 538, Date: new Date(2020, 9, 28) },
];

function App() {
  const [updatedExpensesList, setUpdatedExpensesList] = useState(expensesList);

  // handler function to receive data from NewExpense component
  function addExpenseHandler(addingExpense) {
    setUpdatedExpensesList((prevExpenses) => {
      return [addingExpense, ...prevExpenses];
    });
    // console.log("In App.js"); console.log(addingExpense);
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* sending this values to the Expense component thru attributes and getting them in ExpenseItem.js */}
      <Expenses items={updatedExpensesList} />
    </div>
  );
}

export default App;
