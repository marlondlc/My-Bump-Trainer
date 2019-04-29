import React from 'react';
import fusioncharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
import widgets from "fusioncharts/fusioncharts.widgets";
import ReactFusioncharts from "react-fusioncharts";
import foodPyramid from "./charts/foodpyramid.jsx";

// Resolves charts dependancy
widgets(fusioncharts);

class MyComponent extends React.Component {
  render() {
    foodPyramid.dataSource.data = this.props.foodPyramid;
    return (
      <ReactFusioncharts {...foodPyramid} />
    );
  }
}

export default MyComponent;