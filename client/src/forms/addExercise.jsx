import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddExercise extends React.Component {
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
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          {/* If this is blank then submitted date should be now */}
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
        </FormGroup>
        <Button>Add exercise</Button>
      </Form>
    );
  }
}
