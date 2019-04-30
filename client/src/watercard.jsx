// Chart appearing too far left.
// We could make the charts more modular
import React from 'react';
import GenericCard from './genericcard'
// import chartConfigs from "./charts/water.jsx";
// import waterCylinder from "./charts/watercylinder";

class WaterCard extends React.Component {

  render() {
    // chartConfigs.dataSource.data = this.props.waterEntries;
    // waterCylinder.dataSource.value = this.props.totalWater;
    return (
      <GenericCard title="Your water" type="water" buttonLabel="Add water" timePeriod={this.props.timePeriod} chart1data={this.props.totalWater} chart2data={this.props.waterEntries}/>
    );
  }
}

export default WaterCard;