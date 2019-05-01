import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

// ADD FOOD TYPES + STYLING WITH HANNAH

export default class AddFood extends React.Component {
  state= {
    ate_at: ""
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let momentpresent = this.state.ate_at ? this.state.ate_at : new Date().toISOString()
    const data = {
      ate_at: momentpresent
    }
    axios({
      method: 'post',
      url: 'api/vi/food_entries',
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
            value="date placeholder"
            onChange={this.state.ate_at}
          />
        </FormGroup>
     
        <Button>Add food</Button>
      </Form>
    );
  }
}
