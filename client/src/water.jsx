import React, { Component } from 'react';
import water_icon from './docs/water_icon.png';
import random_chart from './docs/random_chart.png'
import { Button } from 'reactstrap';
import './component.css'

class Water extends Component {

  render(){
    return(
      <div className="component" id="water">
        <div className="content">
          <img src={water_icon} class="icon" alt="water" />
          <h2>Water</h2>
          <img src={random_chart} alt="random-chart" />
        </div>
        <Button>Add water</Button>
      </div>          
    )
  }
}

export default Water;