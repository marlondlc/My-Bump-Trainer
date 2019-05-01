// Chart appearing too far left.
// We could make the charts more modular
import React from 'react';
import GenericCard from './genericcard'
import waterConfigs from "./charts/water.jsx";
import waterCylinder from "./charts/watercylinder";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class WaterCard extends React.Component {
  render() {
    waterCylinder.dataSource.value = this.props.totalWater;
    const chart1 = <ReactFC {...waterCylinder} />
    waterConfigs.dataSource.data = this.props.waterEntries;
    const chart2 = <ReactFC {...waterConfigs} />

    return (
      <GenericCard type="water" timePeriod={this.props.timePeriod} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default WaterCard;