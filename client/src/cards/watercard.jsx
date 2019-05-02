// This needs to be updated so waterentries are being taken from state rather than props

import React from 'react';
import axios from 'axios';
import GenericCard from './genericcard';
import Dialog from '../forms/waterdialog';
import waterConfigs from "../charts/water.jsx";
import waterCylinder from "../charts/watercylinder";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class WaterCard extends React.Component {
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


  render() {
    waterCylinder.dataSource.value = this.props.totalWater;
    const chart1 = <ReactFC  {...waterCylinder} />
    waterConfigs.dataSource.data = this.props.waterEntries;
    const chart2 = <ReactFC {...waterConfigs} />
    const dialog = <Dialog />

    return (
      <GenericCard type="water" timePeriod={this.props.timePeriod} dialog={dialog} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default WaterCard;