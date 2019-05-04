import React from 'react';
import axios from 'axios';
import GenericCard from './genericcard'
import Dialog from '../forms/exercisedialog';
import exerciseTarget from "../charts/exercisetarget";
import exerciseConfigs from "../charts/exercise.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";
import {dayExerciseEntries, weekExerciseEntries, monthExerciseEntries, totalExerciseDay, averageExerciseWeek, averageExerciseMonth, dayExercisePie, weekExercisePie, monthExercisePie} from'../data/exerciseEntries';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class ExerciseCard extends React.Component {
  state = {
    exercise_entries: []
  }

    // this comment will be used for the map function listing elements of water data to the chart 
     // <div>
      //   <span>TESTING JSON RESPONSE</span>
      //   <ul>
      //   { this.state.exercise_entries.map(exercise => <li>{exercise_entries}</li>)}
      //   </ul>
      // </div> 

  componentDidMount() {
    axios.get(`/api/v1/exercise_entries`)
      .then(res => {
        const exercise_entries = res.data;
        console.log(exercise_entries)
        this.setState({ exercise_entries });
      })
      .catch(error => console.log(error));
  }

  render() {
    
    // Here this is determining which data is going to be passed to the chart depending on the timeperiod.
    const timePeriod = this.props.timePeriod;
    let averageExercise;
    let exerciseEntries;
    let exercisePie;

    if (timePeriod === 'day') {
      averageExercise = totalExerciseDay;
      exerciseEntries = dayExerciseEntries;  
      exercisePie = dayExercisePie;
    } else if (timePeriod === 'week') {
      averageExercise = averageExerciseWeek; 
      exerciseEntries = weekExerciseEntries;
      exercisePie = weekExercisePie;
    } else if (timePeriod === 'month') {
      averageExercise = averageExerciseMonth;
      exerciseEntries = monthExerciseEntries;
      exercisePie = monthExercisePie;
    }

    // This sets the data for the charts
    exerciseTarget.dataSource.data = exercisePie;
    exerciseConfigs.dataSource.data = exerciseEntries;

    // This sets the charts to variables which can be passed to the generic chart
    const chart1 = <ReactFC {...exerciseTarget} />
    const chart2 = <ReactFC {...exerciseConfigs} />

    // This is the popup where people can enter exercise choices. Need to be able to pass exercise list to this.
    const dialog = <Dialog />

    return (

      // This passes variables to the generic card component which renders the card
      <GenericCard 
        type="exercise" 
        timePeriod={this.props.timePeriod} 
        dialog={dialog} 
        totalExercise={averageExercise} 
        chart1={chart1} 
        chart2={chart2}/>
    );
  }
}

export default ExerciseCard;