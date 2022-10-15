import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // seleting only the value from the ob
  const totalMaximum = Math.max(...dataPointValues); // ... spread operator toa void error
  console.log("chart.js");  console.log(dataPointValues);  console.log(totalMaximum);

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
