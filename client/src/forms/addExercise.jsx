import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import momentDurationFormatSetup from 'moment-duration-format';
import moment from 'react-moment';

export default class AddExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start_time: "",
      end_time: ""
    }
  }

  // exercise equivalte to an id -- links to an id to DB
  // moment function to use for data (date to moment) formatting into fusionchart
  momentDurationFormatSetup = (moment) => {
  const startMoment = this.state.start_time
  const endMoment = this.state.end_time
  const durationSeconds = (endMoment - startMoment) / 1000;
  const durationMinutes = durationSeconds / 60
  const duration = moment.duration(durationSeconds, "seconds").format("mm");
  

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let momentPresent = this.state.start_time ? this.state.start_time : new Date().toISOString()
    let momentEnding = this.state.end_time ? this.state.end_time : new Date().toISOString()
    const data = {
      start_time: this.state.start_time,
      end_time: this.state.end_time
    }
  axios({
    method: 'post',
    url: '/api/v1/exercise_entries', 
    data: data
   })
   .then(function (response) {
     //handle success
     console.log(response);
   })
   .catch(function (error) {
     //handle error
     console.log(error);
   });
 }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>What exercise have you done?</h2>
        <FormText color="muted">
            Search for an exercise type and click start. If you've already finished, just let us know the times.
          </FormText>
        <FormGroup>
          <Label for="exerciseSearch">Search</Label>
          <Input
            type="search"
            name="name"
            id="exerciseType"
            placeholder="Search for the type of exercise"
          />
        </FormGroup>
        {/* Maybe insert a toggle that is now or enter date/time */}
        <FormGroup>
          {/* If this is blank then submitted date should be today */}
          <Label for="exampleDate">start_time</Label>
          <Input
            type="time"
            name="start_time"
            id="starttimeid"
            placeholder="Starting Time"
            value={this.state.end_time}
            onChange={this.handleChange}

          />
        </FormGroup>
        <FormGroup>
          {/* USER SHOULD PRESS BUTTON SECOND TIME TO TRIGGER END_TIME VALUE AXIOS */}
          <Label for="exampleTime">end_time</Label>
          <Input
            type="time"
            name="end_time"
            id="endtimeid"
            placeholder="Ending Time"
            value={this.state.start_time}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Add exercise</Button>
      </Form>
    );
  }
}
