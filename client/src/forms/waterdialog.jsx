import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
import styles from '../css/style';

import axios from 'axios';

class AddWater extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      volume: 440,
      drunk_at: "",
      open: false,
    }
  }  

  handleChangeVolume = event => {
    console.log("look EVENT NAME", [event.target.name])
    console.log(event.target.value)
    this.setState({ volume: event.target.value})
  }

  handleChangeDate = event => {
    this.setState({ drunk_at: event.target.value })
  }

  handleSubmit = () => {
    const that = this;
  
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
      that.props.onSubmit()
      // //handle 
      // // add get again and refresh state
      // console.log('who am i ', that.props)
      //  axios.get(`/api/v1/water_entries/${that.props.timePeriod ? that.props.timePeriod : ""}`)
      // .then(res => {
      //   const water_entries = res.data ;
      //   console.log('===> water_entries')
      //   this.setState({ water_entries });
      // })
      // .catch(error => console.log(error));
      // console.log(response);
   
    })
    .catch(function (error) {
      //handle error
      console.log('ERRRROOR error', error);
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
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" className={classes.water} onClick={this.handleClickOpen}>
          Add Water
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add water</DialogTitle>
          <DialogContent>
            <DialogContentText>
                If you've just finished one of your regular bottles just hit "Add water". 
                Otherwise let us know how much you've had to drink and when.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="volume"
              label="Volume"
              type="text"
              fullWidth
              value={this.state.volume}
              onChange={this.handleChangeVolume}
            />
            <TextField
              autoFocus
              margin="dense"
              id="timedate"
              label="When"
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
            <Button onClick={this.handleCloseandSubmit} color="primary">
              Add water
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddWater);