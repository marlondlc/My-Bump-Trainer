import React, { Component } from 'react';
import water_icon from './docs/water_icon.png';
import random_chart from './docs/random_chart.png'
import { Button } from 'reactstrap';
import './component.css'
import axios from 'axios';

class Water extends Component {
  state = {
    water_entries: []
  }

      // this comment will be used for the map function listing elements of water data to the chart 
     // <div>
      //   <span>TESTING JSON RESPONSE</span>
      //   <ul>
      //   { this.state.water_entries.map(water => <li>{water_entries}</li>)}
      //   </ul>
      // </div> 
  
  
  componentDidMount() {
    axios.get(`/api/v1/water_entries`)
      .then(res => {
        const water_entries = res.data;
        console.log(water_entries)
        this.setState({ water_entries });
      })
      .catch(error => console.log(error));
  }

  render(){
    return(
      <div className="component" id="water">
        <div className="content">
          <img src={water_icon} className="icon" alt="water" />
          <h2>Water</h2>
          <img src={random_chart} alt="random-chart" />
        </div>
        <Button>Add water</Button>
      </div>
        
    )
  }
}

export default Water;