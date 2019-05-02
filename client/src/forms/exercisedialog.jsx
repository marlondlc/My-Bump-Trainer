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
      exercise_type: "",
      start_time: "",
      open: false,
    }
  }  

  handleChangeExercise = event => {
    this.setState({ exercise_type: event.target.value })
  }

  handleChangeDate = event => {
    this.setState({ start_time : event.target.value})
  }

  handleSubmit = () => {
    let momentpresent = this.state.start_time ? this.state.start_time : new Date().toISOString()
    const data = {
      exercise_type: this.state.exercise_type,
      start_time: momentpresent
    }
    axios({
     method: 'post',
     url: '/api/v1/exercise_entries',
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

  handleCloseandSubmit = () => {
    this.setState({ open: false })
    this.handleSubmit();
  }

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
              id="exercisename"
              label="Exercise"
              type="text"
              fullWidth
              defaultValue="Pilates"
              value={this.state.exerciseName}
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="timedate"
              label="When"
              type="date"
              fullWidth
              defaultValue={this.state.start_time}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseandSubmit} color="primary">
              Add exercise
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}