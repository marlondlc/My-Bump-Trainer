import React, { Component } from 'react';
import exercise_icon from './docs/exercise_icon.png';
import random_chart from './docs/random_chart.png'
import { Button } from 'reactstrap';
import './component.css'
import axios from 'axios';

class Exercise extends Component {
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

  render(){
    return(
      <div className="component" id="exercise">
        <img src={exercise_icon} class="icon" alt="exercise" />
        <h2>Exercise</h2>
        <img src={random_chart} alt="random-chart" />
        <Button>Add Exercise</Button>
      </div>          
    )
  }
}

export default Exercise;