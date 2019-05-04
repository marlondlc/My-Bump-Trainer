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
import foodPyramidchart from "../charts/foodpyramid.jsx";
import actualfoodPyramid from "../charts/actualfoodpyramid.jsx";
import foodConfigs from "../charts/food.jsx";
import {dayFoodEntries, weekFoodEntries, monthFoodEntries, totalFoodDay, averageFoodWeek, averageFoodMonth, dayFoodPyramid, weekFoodPyramid, monthFoodPyramid} from'../data/foodEntries';

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
    const timePeriod = this.props.timePeriod;
    let averageFood;
    let foodEntries;
    let foodPyramid;

    if (timePeriod === 'day') {
      averageFood = totalFoodDay;
      foodEntries = dayFoodEntries;  
      foodPyramid = dayFoodPyramid;
    } else if (timePeriod === 'week') {
      averageFood = averageFoodWeek; 
      foodEntries = weekFoodEntries;
      foodPyramid = weekFoodPyramid;
    } else if (timePeriod === 'month') {
      averageFood = averageFoodMonth;
      foodEntries = monthFoodEntries;
      foodPyramid = monthFoodPyramid;
    }

    foodPyramidchart.dataSource.data = foodPyramid;
    foodConfigs.dataSource.data = foodEntries;

    const chart1 = <ReactFC {...foodPyramidchart} />
    const chart2 = <ReactFC {...actualfoodPyramid} />
    
    // const chart3 = <ReactFC {...foodConfigs} />
    const dialog = <Dialog />

    return (
      <GenericCard type="food" timePeriod={timePeriod} dialog={dialog} averageCalories={averageFood} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default FoodCard;