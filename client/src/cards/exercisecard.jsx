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
// import {U1dayExerciseEntries, U1weekExerciseEntries, U1monthExerciseEntries, U1totalExerciseDay, U1averageExerciseWeek, U1averageExerciseMonth, U1dayExercisePie, U1weekExercisePie, U1monthExercisePie} from'../data/User1/U1exerciseEntries';
import {U2dayExerciseEntries, U2weekExerciseEntries, U2monthExerciseEntries, U2totalExerciseDay, U2averageExerciseWeek, U2averageExerciseMonth, U2dayExercisePie, U2weekExercisePie, U2monthExercisePie} from'../data/User2/U2exerciseEntries';
import {exercisePerDayRec} from '../data/recommendations';

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

    // let currentUser = false;
    // let currentUserId;
    // if (this.props.currentUser) {
    //   currentUser = true;
    //   currentUserId = this.props.currentUser.id;
    // }

    // console.log(this.props.currentUser)

    let averageExercise;
    let exerciseEntries;
    let exercisePie;

        if (timePeriod === 'day') {
          averageExercise = U2totalExerciseDay;
          exerciseEntries = U2dayExerciseEntries;  
          exercisePie = U2dayExercisePie;
        } else if (timePeriod === 'week') {
          averageExercise = U2averageExerciseWeek; 
          exerciseEntries = U2weekExerciseEntries;
          exercisePie = U2weekExercisePie;
        } else if (timePeriod === 'month') {
          averageExercise = U2averageExerciseMonth;
          exerciseEntries = U2monthExerciseEntries;
          exercisePie = U2monthExercisePie;
        }
      
    

    // This sets the data for the charts
    exerciseTarget.dataSource.data = exercisePie;
    exerciseConfigs.dataSource.data = exerciseEntries;

    // This sets the charts to variables which can be passed to the generic chart
    const chart1 = <ReactFC {...exerciseTarget} />
    const chart2 = <ReactFC {...exerciseConfigs} />

    // This is the popup where people can enter exercise choices. Need to be able to pass exercise list to this.
    const dialog = <Dialog />

    // This is some data for recommendations
    const actualAerobic = exercisePie.find( group => group.label === 'Aerobic' ).value;
    const actualBalance = exercisePie.find( group => group.label === 'Balance' ).value;
    const actualStrength = exercisePie.find( group => group.label === 'Strength' ).value;
    const actualFlexibility = exercisePie.find( group => group.label === 'Flexibility' ).value;
    
    let moreAerobic = false;
    if (averageExercise - actualAerobic > 20) {
      moreAerobic = true
    }

    let moreBalance = false;
    if (10 - actualBalance > 0) {
      moreBalance = true; 
    }

    let moreStrength = false;
    if (15 - actualStrength > 0) {
      moreStrength = true;
    }

    let moreFlexibility = false;
    if (15 - actualFlexibility > 0) {
      moreFlexibility = true;
    }

    // This compares the exercise with the recommended to create a messsage that can be passed to generic card
    let message;
    let video;
    if ((exercisePerDayRec - averageExercise) <= 0) {
      if (moreAerobic) {
        message = "Try doing a bit more aerobic exercise. It's a good idea to do at least 20 mins per day"
        switch (this.props.trimester) {
            case 'first':
                video = 'https://www.youtube.com/embed/9i1RFqR1Xk'
                break;
            case 'second':
                video = 'https://www.youtube.com/embed/0BDbn9cFxt0'
                break;
            case 'third':
                video = 'https://www.youtube.com/embed/Pd7_vi0GV1c'
                break;
            default:
                video = 'https://youtu.be/embed/NckS85-1etQ'
        }
      }
      else if (moreStrength || moreBalance || moreFlexibility) {
        message = "You're meeting the recommendations, but try to ensure you are doing Strength, Balance and Flexibiilty exercises as well as Aerobic"
        if (moreBalance) {
            video = 'https://www.youtube.com/embed/cZ18qPmuXug'
        } else if (moreFlexibility &! moreBalance) {
            switch (this.props.trimester) {
                case 'first':
                    video = 'https://www.youtube.com/embed/1bTSrM_Qdc4'
                    break;
                case 'second':
                    video = 'https://www.youtube.com/embed/Hy13X6zURrg'
                    break;
                case 'third':
                    video = 'https://www.youtube.com/embed/OCUkbWRHDlM'
                    break;
                default:
                    video = 'https://www.youtube.com/embed/Us3fW73_8Js'
            }
        } else {
            switch (this.props.trimester) {
                case 'first':
                    video = 'https://www.youtube.com/embed/7D4zvnGletw'
                    break;
                case 'second':
                    video = 'https://www.youtube.com/embed/5nck_40G7LY'
                    break;
                case 'third':
                    video = 'https://www.youtube.com/embed/uPJf96XZGps'
                    break;
                default:
                    video = 'https://www.youtube.com/embed/gNGOGWnvMqQ'
            }
        } 
      } else {
        message = 'Wohoo you are meeting the recommendations.';
        video = 'https://www.youtube.com/embed/SVMRCH5CpGA'
      }
    } else {
        message = `Try increasing your exercise by ${exercisePerDayRec - averageExercise} minutes per day`
        video = 'https://www.youtube.com/embed/chmJYspx0A'
    }

    return (

      // This passes variables to the generic card component which renders the card
      <GenericCard 
        type="exercise" 
        timePeriod={this.props.timePeriod} 
        dialog={dialog} 
        message={message}
        video={video}
        totalExercise={averageExercise} 
        chart1={chart1} 
        chart2={chart2}/>
    );
  }
}

export default ExerciseCard;