import React from 'react';
import axios from 'axios';
import Dialog from '../forms/fooddialog';
import GenericCard from './genericcard'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from 'fusioncharts/fusioncharts.widgets';
import foodPyramidchart from '../charts/foodpyramid.jsx';
import actualfoodPyramid from '../charts/actualfoodpyramid.jsx';
import foodConfigs from '../charts/food.jsx';
import {U1dayFoodEntries, U1weekFoodEntries, U1monthFoodEntries, U1totalFoodDay, U1averageFoodWeek, U1averageFoodMonth, U1dayFoodPyramid, U1weekFoodPyramid, U1monthFoodPyramid} from'../data/User1/U1foodEntries';
import {U2dayFoodEntries, U2weekFoodEntries, U2monthFoodEntries, U2totalFoodDay, U2averageFoodWeek, U2averageFoodMonth, U2dayFoodPyramid, U2weekFoodPyramid, U2monthFoodPyramid} from'../data/User2/U2foodEntries';
import {foodPyramidRec, caloriesPerDayRec} from '../data/recommendations';

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
        // console.log(food_entries)
        this.setState({ food_entries });
      })
      .catch(error => console.log(error));
  }
  
  render() {
    // Here this is determining which data is going to be passed to the chart depending on the timeperiod.
    const timePeriod = this.props.timePeriod;

    let currentUser = false;
    let currentUserId;
    if (this.props.currentUser) {
      currentUser = true;
      currentUserId = this.props.currentUser.id;
    }

    let averageFood;
    let foodEntries;
    let foodPyramid;

    if (currentUser) {
      if (currentUserId === 6) {
        if (timePeriod === 'day') {
          averageFood = U1totalFoodDay;
          foodEntries = U1dayFoodEntries;  
          foodPyramid = U1dayFoodPyramid;
        } else if (timePeriod === 'week') {
          averageFood = U1averageFoodWeek; 
          foodEntries = U1weekFoodEntries;
          foodPyramid = U1weekFoodPyramid;
        } else if (timePeriod === 'month') {
          averageFood = U1averageFoodMonth;
          foodEntries = U1monthFoodEntries;
          foodPyramid = U1monthFoodPyramid;
        }
      } else {
        if (timePeriod === 'day') {
          averageFood = U2totalFoodDay;
          foodEntries = U2dayFoodEntries;  
          foodPyramid = U2dayFoodPyramid;
        } else if (timePeriod === 'week') {
          averageFood = U2averageFoodWeek; 
          foodEntries = U2weekFoodEntries;
          foodPyramid = U2weekFoodPyramid;
        } else if (timePeriod === 'month') {
          averageFood = U2averageFoodMonth;
          foodEntries = U2monthFoodEntries;
          foodPyramid = U2monthFoodPyramid;
        }
      }
    }

    // This sets the data for the charts
    foodPyramidchart.dataSource.data = foodPyramid;
    foodConfigs.dataSource.data = foodEntries;
    actualfoodPyramid.dataSource.data = foodPyramidRec;

    // This sets the charts to variables which can be passed to the generic chart
    const chart1 = <ReactFC {...foodPyramidchart} />
    const chart2 = <ReactFC {...actualfoodPyramid} />
      
    // const chart3 = <ReactFC {...foodConfigs} /> //this is an extra chart we can use

    // This is the popup where people can enter food choices. Need to be able to pass food list to this.
    const dialog = <Dialog />

    // This looks at which trimester the user is in (from props) and determines the recommended calories
    const trimester = this.props.trimester;
    let recommendedCalories;
    if (trimester === 'first') {
      recommendedCalories = caloriesPerDayRec.firstTrimester;
    } else if (trimester === 'second') {
      recommendedCalories = caloriesPerDayRec.secondTrimester; 
    } else if (trimester === 'third') {
      recommendedCalories = caloriesPerDayRec.thirdTrimester;
    }

    // This gets data for comparisons
    const actualTreatsPercentage = foodPyramid.find( group => group.label === 'Food and drinks high in fat, sugar and salt' ).value;
    // const actualFatsPercentage = foodPyramid.find( group => group.label === 'Fats, spreads and oils' ).value;
    // const actualProteinPercentage = foodPyramid.find( group => group.label === 'Meat, poultry, fish, eggs, beans and nuts' ).value;
    // const actualDairyPercentage = foodPyramid.find( group => group.label === 'Milk, yoghurt and cheese' ).value;
    // const actualCarbsPercentage = foodPyramid.find( group => group.label === 'Wholemeal cereals and breads, potatoes, pasta and rice' ).value;
    const actualVegePercentage = foodPyramid.find( group => group.label === 'Vegetables, salad and fruit' ).value;
    const recTreatsPercentage = foodPyramidRec.find( group => group.label === 'Food and drinks high in fat, sugar and salt' ).value;
    // const recFatsPercentage = foodPyramidRec.find( group => group.label === 'Fats, spreads and oils' ).value;
    // const recProteinPercentage = foodPyramidRec.find( group => group.label === 'Meat, poultry, fish, eggs, beans and nuts' ).value;
    // const recDairyPercentage = foodPyramidRec.find( group => group.label === 'Milk, yoghurt and cheese' ).value;
    // const recCarbsPercentage = foodPyramidRec.find( group => group.label === 'Wholemeal cereals and breads, potatoes, pasta and rice' ).value;
    const recVegePercentage = foodPyramidRec.find( group => group.label === 'Vegetables, salad and fruit' ).value;

    let eatMoreVeges = false;
    if ((actualVegePercentage - recVegePercentage ) <= 0) {
      eatMoreVeges = true;
    }

    let eatLessSweets = false;
    if ((recTreatsPercentage - actualTreatsPercentage ) <= 0) {
      eatLessSweets = true;
    }  

    // This compares the consumed with the recommended to create a messsage that can be passed to generic card
    let message;
    if ((recommendedCalories - averageFood) >= 0) {
        message = 'Wohoo you are meeting the recommendations.' ;
    } else if (eatMoreVeges && eatLessSweets) {
        message = `Try replacing sugary treats with fruit or vegetables.`
    } else if (eatLessSweets &! eatMoreVeges ) {
        message = `Try replacing sugary drinks with water.`
    }

    return (

      // This passes variables to the generic card component which renders the card
      <GenericCard 
        type="food" 
        timePeriod={timePeriod} 
        dialog={dialog} 
        trimester={this.props.trimester}
        recommendedCalories={recommendedCalories}
        message={message}
        averageCalories={averageFood} 
        chart1={chart1} 
        chart2={chart2}/>
    );
  }
}

export default FoodCard;