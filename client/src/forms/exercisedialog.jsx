import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';
// import DateTime from 'react-datetime';

export default class AddExercise extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 440,
      drunk_at: "",
      timedate: "",
      open: false,
    }
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add exercise
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
                If you've just finished one of your regular bottles just hit "Add exercise". 
                Otherwise let us know how much you've had to drink and when.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="volume"
              label="Volume"
              type="text"
              fullWidth
              defaultValue="440"
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="timedate"
              label="When"
              type="text"
              fullWidth
              defaultValue="2pm 08 Apr 2019"
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add exercise
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}