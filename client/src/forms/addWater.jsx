import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


export default class AddWater extends React.Component {
  constructor() {
    super();
  }
  state = {
    volume: 440,
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

// Adding a onSubmit even will cover UX: enter + btn click to input form
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      volume: this.state.volume
    }
    // const waterData = new FormData();
    axios({
     method: 'post',
     url: '/api/v1/water_entries', //backend api/v1/water_entries (run rake route to see backend route)
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
        <h2>Add your water intake</h2>
        <FormText color="muted">
            If you've just finished one of your regular bottles just hit "Add water". 
            Otherwise let us know how much you've had to drink and when.
          </FormText>
        <FormGroup>
          <Label for="exampleText">Volume of water</Label>
          <Input 
            type="textarea" 
            name="volume" 
            id="exampleText" 
            value={this.state.volume}
            onChange={this.handleChange}
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
        <Button type="submit">Add water</Button>
      </Form>
    );
  }
}