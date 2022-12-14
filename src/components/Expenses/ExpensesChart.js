import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses){
    const expenseMonth = expense.Date.getMonth(); // starting at 0 as January
    chartDataPoint[expenseMonth].value += expense.Amount;
  }
//   console.log("ExpenseChart.js");  console.log(chartDataPoint);

  return <Chart dataPoints={chartDataPoint} />;
}

export default ExpensesChart;
