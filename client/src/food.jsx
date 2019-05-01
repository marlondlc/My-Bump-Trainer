import React, { Component } from 'react';
import food_icon from './docs/food_icon.png';
import random_chart from './docs/random_chart.png'
import { Button } from 'reactstrap';
import './component.css'
import axios from 'axios';

class Food extends Component {
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

  render(){
    return(
      <div className="component" id="food">
        <img src={food_icon} class="icon" alt="food" />
        <h2>Food</h2>
        <img src={random_chart} alt="random-chart" />
        <Button>Add Food</Button>
      </div>
    )
  }
}

export default Food;