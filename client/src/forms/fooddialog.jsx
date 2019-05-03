import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntegrationDownshift from '../components/searchbar';


import axios from 'axios';
// import DateTime from 'react-datetime';

export default class AddFood extends React.Component {
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
    const suggestions = [
      { label: 'Alfalfa Sprouts', servingSize: "1 Tbsp" },
      { label: 'Apple Juice' },
      { label: 'Apple' },
      { label: 'Avocado' },
      { label: 'Asparagus' },
      { label: 'Almonds' },
      { label: 'Almond Butter' },
      { label: 'Apple Dumpling' },
      { label: 'Apple Pie' },
      { label: 'Anchovy' },
      { label: 'Artichokes' },
      { label: 'Ants, chocolate covered' },
      { label: 'Almond milk' },
      { label: 'Avocado Oil' },
      { label: 'Avocado Spread' },
      { label: 'Bahamas' },
      { label: 'Bahrain' },
      { label: 'Bangladesh' },
      { label: 'Barbados' },
      { label: 'Belarus' },
      { label: 'Belgium' },
      { label: 'Belize' },
      { label: 'Benin' },
      { label: 'Bermuda' },
      { label: 'Bhutan' },
      { label: 'Bolivia, Plurinational State of' },
      { label: 'Bonaire, Sint Eustatius and Saba' },
      { label: 'Bosnia and Herzegovina' },
      { label: 'Botswana' },
      { label: 'Bouvet Island' },
      { label: 'Brazil' },
      { label: 'British Indian Ocean Territory' },
      { label: 'Brunei Darussalam' },
    ];
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
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
            <IntegrationDownshift suggestions={suggestions}/>
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