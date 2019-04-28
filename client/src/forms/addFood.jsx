import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddFood extends React.Component {
  render() {
    return (
      <Form>
        <h2>What have you had to eat?</h2>
        <FormText color="muted">
            Search for the food you've eaten and enter the number of servings you've had.
          </FormText>
        <FormGroup>
          <Label for="foodSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="foodType"
            placeholder="Search for a food"
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
        <Button>Add food</Button>
      </Form>
    );
  }
}
