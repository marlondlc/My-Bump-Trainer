import React, { Component } from "react";
import Axios, { post } from "axios";


class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"auth": {"email": email, "password": password}};
    post('/user_token', request) //check post /path for confirmation of raiuser_token ******
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
        Axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
      })
      .then(response => {
        Axios.get(`/api/v1/users/1`)
        .then(response => {
          console.log("HER THIS IS THE LONGIN", response.data)
          this.props.updateCurrentUser(response.data)
          
          })
        })
      .catch(error => console.log("error", error));
  }




  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

//  https://react.semantic-ui.com/elements/divider/#types-vertical-form // might want to use this if we use google sign up

//EXAMPLE:
// import React from 'react'
// import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

// const DividerExampleVerticalForm = () => (
//   <Segment placeholder>
//     <Grid columns={2} relaxed='very' stackable>
//       <Grid.Column>
//         <Form>
//           <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
//           <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />

//           <Button content='Login' primary />
//         </Form>
//       </Grid.Column>

//       <Grid.Column verticalAlign='middle'>
//         <Button content='Sign up' icon='signup' size='big' />
//       </Grid.Column>
//     </Grid>

//     <Divider vertical>Or</Divider>
//   </Segment>
// )

// export default DividerExampleVerticalForm
