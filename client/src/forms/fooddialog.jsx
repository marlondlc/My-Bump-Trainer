import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntegrationDownshift from '../components/searchbarFood';
import { withStyles } from '@material-ui/core/styles';
import styles from '../css/style';

import axios from 'axios';
// import DateTime from 'react-datetime';

class AddFood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serving_size: 1.2,
      ate_at: "",
      open: false,
    }
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" className={classes.food} onClick={this.handleClickOpen}>
          Add food
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add food</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Search for the food you've eaten and enter the number of servings you've had.
            </DialogContentText>
            <IntegrationDownshift/>
            <TextField
              autoFocus
              margin="dense"
              id="servings"
              label="Number of servings"
              type="text"
              fullWidth
              defaultValue="1"
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="timedate"
              label="When"
              defaultValue="09/05/2019"
              type="date"
              fullWidth
              value={this.state.drunk_at}
              onInputCapture={this.handleChangeDate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add food
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddFood);