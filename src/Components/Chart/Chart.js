import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  datasets: [
    {
      data: [825, 2514, 789, 1054, 546, 1758],
      fill: false,
      backgroundColor: "black",
      borderColor: "black"
    }
  ]
};

function Chart() {
  return <Line width={400} height={150} data={data} />;
}

export default Chart;
