import React from 'react';
import GenericCard from './genericcard'
import exerciseTarget from "./charts/exercisetarget";
import exerciseConfigs from "./charts/exercise.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class ExerciseCard extends React.Component {

  render() {
    exerciseTarget.dataSource.data = this.props.exerciseType;
    const chart1 = <ReactFC {...exerciseTarget} />
    exerciseConfigs.dataSource.data = this.props.exerciseEntries;
    const chart2 = <ReactFC {...exerciseConfigs} />

    return (
      <GenericCard type="exercise" timePeriod={this.props.timePeriod} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default ExerciseCard;