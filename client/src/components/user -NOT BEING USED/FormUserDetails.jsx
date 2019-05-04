import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
           <AppBar title="Enter User Detail" />
           <TextField
           hintText='Enter your first name'
           floatingLabeltext='First Name'
           onChange={handleChange ('firstName')}
           deafaultValue={values.firstName}
           />
           <br/>
           <TextField
           hintText='Enter your first name'
           floatingLabeltext='First Name'
           onChange={handleChange ('lastName')}
           deafaultValue={values.lastName}
           />
           <br/>


        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
