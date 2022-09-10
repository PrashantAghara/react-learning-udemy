import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  const values = dataPoints.map((dataPoint) => dataPoint.value);
  const max = Math.max(...values);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
