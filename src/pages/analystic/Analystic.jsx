import React from "react";
import "./Analystic.css";

import Chart from "../../components/chart/Chart";
import { userData } from "../../Dummy-data";

function Analystic() {
  return (
    <div className="analystic">
      <h1 className="analysticTitle">Analystic</h1>
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
    </div>
  );
}

export default Analystic;
