import React, { Component } from "react";
import Axios, { post } from "axios";
import Navbar from "../components/toolbar/Navbar";
import Footer from "../components/toolbar/Footer";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


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
    post('/user_token', request) 
      .then(response => {
        localStorage.setItem("jwt", response.data.jwt);
        this.props.history.push("/");
        Axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
      })
      .then(response => {
        Axios.get(`/api/v1/users/6`)
        .then(response => {
          // This props gets the user data from database show controller in users!!!
          console.log(response.data)
          this.props.updateCurrentUser(response.data)
          })
        })
      .catch(error => console.log("error", error));
  }




  render() {
    const { classes } = this.props
    return (

      <div>
        <div className="navbar-div" style={{ height: "100%" }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        </div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
        {/* <h1>Log In</h1>
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
        </form> */}
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Login);

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
