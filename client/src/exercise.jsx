import React, { Component } from 'react';
import exercise_icon from './docs/exercise_icon.png';
import random_chart from './docs/random_chart.png'
import { Button } from 'reactstrap';
import './component.css'

class Exercise extends Component {

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