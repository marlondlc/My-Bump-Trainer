import React from 'react';
import GenericCard from './genericcard'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";
import foodPyramid from "./charts/foodpyramid.jsx";
import actualfoodPyramid from "./charts/actualfoodpyramid.jsx";
import foodConfigs from "./charts/food.jsx";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class FoodCard extends React.Component {

  render() {
    foodPyramid.dataSource.data = this.props.foodPyramid;
    const chart1 = <ReactFC {...foodPyramid} />
    const chart2 = <ReactFC {...actualfoodPyramid} />
    foodConfigs.dataSource.data = this.props.foodEntries;
    const chart3 = <ReactFC {...foodConfigs} />
    
    return (
      <GenericCard type="food" timePeriod={this.props.timePeriod} chart1={chart1} chart2={chart2} chart3={chart3}/>
    );
  }
}

export default FoodCard;