import React from 'react';
import axios from 'axios';
import Dialog from '../forms/fooddialog';
import GenericCard from './genericcard'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";
import foodPyramid from "../charts/foodpyramid.jsx";
import actualfoodPyramid from "../charts/actualfoodpyramid.jsx";
import foodConfigs from "../charts/food.jsx";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class FoodCard extends React.Component {
  state = {
    food_entries: []
  }

  componentDidMount() {
    axios.get(`/api/v1/food_entries`)
      .then(res => {
        const food_entries = res.data;
        console.log(food_entries)
        this.setState({ food_entries });
      })
      .catch(error => console.log(error));
  }
  
  render() {
    foodPyramid.dataSource.data = this.props.foodPyramid;
    const chart1 = <ReactFC {...foodPyramid} />
    const chart2 = <ReactFC {...actualfoodPyramid} />
    foodConfigs.dataSource.data = this.props.foodEntries;
    // const chart3 = <ReactFC {...foodConfigs} />
    const dialog = <Dialog />

    return (
      <GenericCard type="food" timePeriod={this.props.timePeriod} dialog={dialog} totalCalories={this.props.totalCalories} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default FoodCard;