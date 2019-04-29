import React, { Component } from 'react';
import food_icon from './docs/food_icon.png';
import { Button } from 'reactstrap';
import './component.css';
import chartConfigs from "./charts/food.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Food extends Component {

  render(){
    return(
      <div className="component" id="food">
        <div className="content">
          <img src={food_icon} className="icon" alt="food" />
          <h2>Food</h2>
          <ReactFC {...chartConfigs} />
        </div>
        <Button>Add Food</Button>
      </div>
    )
  }
}

export default Food;


