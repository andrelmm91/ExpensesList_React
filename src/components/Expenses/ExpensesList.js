import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  // we could use this if condition instead of && condition in order to reduce the return code and make JSX cleaner.
  //   {filteredExpenses.length === 0 && ( // conditional if length === 0, then execute after &&
  //   <p>No Expenses found.</p>
  // )}
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.Title}
          amount={expense.Amount}
          date={expense.Date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
