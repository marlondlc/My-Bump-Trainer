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
    // Here this is determining which data is going to be passed to the chart depending on the timeperiod.
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

    // This sets the data for the charts
    foodPyramidchart.dataSource.data = foodPyramid;
    foodConfigs.dataSource.data = foodEntries;

    // This sets the charts to variables which can be passed to the generic chart
    const chart1 = <ReactFC {...foodPyramidchart} />
    const chart2 = <ReactFC {...actualfoodPyramid} />
    
    // const chart3 = <ReactFC {...foodConfigs} /> //this is an extra chart we can use

    // This is the popup where people can enter food choices. Need to be able to pass food list to this.
    const dialog = <Dialog />

    // This compares the consumed with the recommended to create a messsage that can be passed to generic chart
    // This needs to be adjusted for food
    // let message;
    // if ((2.3 - averageWater) <= 0) {
    //     message = 'Wohoo you are meeting the recommendations.' ;
    // } else {
    //     message = `This ${timePeriod} you are ${Math.round((2.3 - averageWater) * 1000)} mL under the recommendations.`
    // }

    return (

      // This passes variables to the generic card component which renders the card
      <GenericCard 
        type="food" 
        timePeriod={timePeriod} 
        dialog={dialog} 
        averageCalories={averageFood} 
        chart1={chart1} 
        chart2={chart2}/>
    );
  }
}

export default FoodCard;