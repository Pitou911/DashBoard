import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import "./Home.css";
import Widgetsmall from "../../components/widgetSmall/Widgetsmall";
import Widgetlarge from "../../components/widgetLarge/Widgetlarge";
import { userData } from "../../Dummy-data";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" />
      <div className="homeWidgets">
        <Widgetsmall />
        <Widgetlarge />
      </div>
    </div>
  );
}

export default Home;
