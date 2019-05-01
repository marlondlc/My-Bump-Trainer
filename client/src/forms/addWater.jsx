import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import DateTime from 'react-datetime';

export default class AddWater extends React.Component {
  constructor() {
    super();
  }
  state = {
    volume: 440,
    drunk_at: ""
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let momentpresent = this.state.drunk_at ? this.state.drunk_at : new Date().toISOString()
    const data = {
      volume: this.state.volume,
      drunk_at: momentpresent
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
            placeholder="quantity"
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
            name="drunk_at"
            id="exampleDate"
            placeholder="Date (empty if now)"
            value={this.state.drunk_at}
            onchange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Add water</Button>
      </Form>
    );
  }
}