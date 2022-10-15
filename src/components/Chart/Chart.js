import ChartBar from "./ChartBar";
import './Chart.css'

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // seleting only the value from the ob
  const totalMaximum = Math.max(...dataPointValues); // ... spread operator to void error and because math.max needs an array
//   console.log("chart.js");  console.log(dataPointValues);  console.log(totalMaximum);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
