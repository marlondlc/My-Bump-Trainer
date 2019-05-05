import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

// ADD FOOD TYPES + STYLING WITH HANNAH

export default class AddFood extends React.Component {
  state= {
    serving_size: 1.2,
    ate_at: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let momentpresent = this.state.ate_at ? this.state.ate_at : new Date().toISOString()
    const data = {
      serving_size: this.state.serving_size,
      ate_at: momentpresent
    }
    axios({
      method: 'post',
      url: 'api/v1/food_entries',
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>What have you had to eat?</h2>
        <FormText color="muted">
            Search for the food you've eaten and enter the number of servings you've had.
          </FormText>
        <FormGroup>
          <Label for="foodSearch">Search</Label>
          <Input
            type="float"
            name="serving_size"
            id="foodType"
            placeholder="Search for a food"
            value={this.state.serving_size}
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
            value={this.state.ate_at}
            onChange={this.handleChange}
          />
        </FormGroup>
     
        <Button type="submit">Add food</Button>
      </Form>
    );
  }
}
