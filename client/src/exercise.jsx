import React from 'react';
import GenericCard from './genericcard'

class ExerciseCard extends React.Component {

  render() {
    return (
      <GenericCard title="Your exercise" type="exercise" buttonLabel="Add exercise" timePeriod={this.props.timePeriod} chart1data={this.props.exerciseType} chart2data={this.props.exerciseEntries}/>
    );
  }
}

export default ExerciseCard;