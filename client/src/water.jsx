import React, { Component } from 'react';
import water_icon from './docs/water_icon.png';
import { Button } from 'reactstrap';
import './component.css';
import chartConfigs from "./charts/water.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Water extends Component {

  render(){
    return(
      <div className="component" id="water">
        <div className="content">
          <img src={water_icon} class="icon" alt="water" />
          <h2>Water</h2>
          <ReactFC {...chartConfigs} />
        </div>
        <Button>Add water</Button>
      </div>          
    )
  }
}

export default Water;