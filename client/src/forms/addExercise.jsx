import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import momentDurationFormatSetup from 'moment-duration-format';
import moment from 'react-moment';

export default class AddExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start_time = "",
      end_time = ""
    }
  }

  //exercise equivalte to an id -- links to an id to DB

  momentDurationFormatSetup(moment);
  const durationSeconds = (endsAt - startsAt) / 1000;
  const durationMinutes = durationSeconds / 60
  // const duration = moment.duration(durationSeconds, "seconds").format("mm");
  

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let momentpresent = this.state.

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
      <Form>
        <h2>What exercise have you done?</h2>
        <FormText color="muted">
            Search for an exercise type and click start. If you've already finished, just let us know the times.
          </FormText>
        <FormGroup>
          <Label for="exerciseSearch">Search</Label>
          <Input
            type="search"
            name="search"
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
