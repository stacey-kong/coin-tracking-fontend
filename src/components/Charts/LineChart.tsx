import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
} from "react-vis";

interface Interest {
  x: number;
  y: number;
}

interface lineChartProps {
  data: Interest[];
}
export default function LineCharts(props: lineChartProps) {
  // const data = [
  //   { x: 0, y: 8 },
  //   { x: 1, y: 5 },
  //   { x: 2, y: 4 },
  //   { x: 3, y: 9 },
  //   { x: 4, y: 1 },
  //   { x: 5, y: 7 },
  //   { x: 6, y: 6 },
  //   { x: 7, y: 3 },
  //   { x: 8, y: 2 },
  //   { x: 9, y: 0 },
  // ];
  return (
    <XYPlot width={280} height={200} xType="time">
      <XAxis
        title="week"
        style={{
          line: { stroke: "#ADDDE1" },
          ticks: { stroke: "#ADDDE1" },
          text: {
            stroke: "none",
            fill: "#6b6b76",
            fontWeight: 600,
            fontSize: 10,
          },
        }}
        // tickFormat={(v) => v.slice(0, 3)}
        tickPadding={2}
      />
      <YAxis
        title="Amount"
        style={{
          line: { stroke: "#ADDDE1" },
          ticks: { stroke: "#ADDDE1" },
          text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
        }}
      />
      <LineMarkSeries
        className="linemark-series-example"
        style={{
          strokeWidth: "1px",
          fill: "none",
        }}
        // lineStyle={{stroke: 'red'}}
        markStyle={{ stroke: "blue", fill: "blue" }}
        data={props.data}
      />
    </XYPlot>
  );
}
