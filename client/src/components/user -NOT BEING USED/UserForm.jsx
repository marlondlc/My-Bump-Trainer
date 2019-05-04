import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    dueDate: '',
    initialWeight: '',
    height: '',
    waterBottle: '',
  }
  //* the values above will need to be changed to dates or intigers


  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  //Go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  // handle field change //the above will handle all the value in the fields in state
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }


  render() {

    const { step } = this.state;

    const { firstName, lastName, email, dueDate, initialWeight, height, waterBottle } = this.state;

    const values = { firstName, lastName, email, dueDate, initialWeight, height, waterBottle }


    switch(step) {

      case 1:
        return (
          <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 2:
        return <h1> Form Personal Details </h1>
      case 3:
        return <h1> Confirm User </h1>
    }
    return (
      <div>

      </div>
    )
  }
}

export default UserForm
