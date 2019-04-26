import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddWater extends React.Component {
  render() {
    return (
      <Form>
        <h2>Add your water intake</h2>
        <FormText color="muted">
            If you've just finished one of your regular bottles just hit "Add water". 
            Otherwise let us know how much you've had to drink and when.
          </FormText>
        <FormGroup>
          <Label for="exampleText">Volume of water</Label>
          <Input type="textarea" name="volume" id="exampleText" value="440"/>
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
        <Button>Add water</Button>
      </Form>
    );
  }
}
