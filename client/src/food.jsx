import React from 'react';
import GenericCard from './genericcard'

class FoodCard extends React.Component {

  render() {
    return (
      <GenericCard title="Your food" type="food" buttonLabel="Add food" timePeriod={this.props.timePeriod} chart1data={this.props.foodPyramid} chart2data={this.props.foodEntries}/>
    );
  }
}

export default FoodCard;