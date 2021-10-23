import React from "react";
import "./Chart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ title, data, dataKey }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
