import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntegrationReactSelect from '../components/searchbarFood';
import { withStyles } from '@material-ui/core/styles';
import styles from '../css/style';

import axios from 'axios';
// import DateTime from 'react-datetime';

class AddFood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serving_size: "",
      ate_at: "",
      open: false,
      foodSuggestions: [
        { label: 'Acorn Squash', id: 1, servingSize: "0.5 Cup" },
        { label: 'Adzuki Beans', id: 2, servingSize: "0.5 Cup"},
        { label: 'Agave Syrup', id: 3, servingSize: "1 Tbsp"},
        { label: 'Aioli', id: 4, servingSize: "1 Tbsp" },
        { label: 'Alfalfa Sprouts', id: 5, servingSize: "0.5 Cup"},
        { label: 'Almond milk', id: 6, servingSize: "" },
        { label: 'Almond Oil', id: 7, servingSize: "1 Tbsp"},
        { label: 'Almonds', id: 8, servingSize: "15g"},
        { label: 'Amaranth', id: 9, servingSize: "0.5 Cup"},
        { label: 'Anchovies', id: 10, servingSize: "20g"},
        { label: 'Ants, chocolate covered', id: 11, servingSize: "1 Tbsp"},
        { label: 'Apple', id: 12, servingSize: "1 Apple" },
        { label: 'Apple Cider', id: 13, servingSize: "1 Tbsp"},
        { label: 'Apple Juice', id: 14, servingSize: "1 Cup" },
        { label: 'Apple Juice concentrate', id: 15, servingSize: "100mL"},
        { label: 'Apple Sauce', id: 16, servingSize: "1 Tbsp" },
        { label: 'Apricot', id: 17, servingSize: "1 Apricot"},
        { label: 'Arrowroot', id: 18, servingSize: "1 Tbsp"},
        { label: 'Artichoke', id: 19, servingSize: "1 Artichoke" },
        { label: 'Artichoke Heart', id: 20, servingSize: "1 Artichoke Heart" },
        { label: 'Artificial Sweetener', id: 21, servingSize: "1 Tablet" },
        { label: 'Asparagus', id: 22, servingSize: "70 g" },
        { label: 'Aubergine', id: 23, servingSize: "1 Cup" },
        { label: 'Avocado', id: 24, servingSize: "100g" },
        { label: 'Avocado Oil', id: 25, servingSize: "100g" },
        { label: 'Avocado Spread', id: 26, servingSize: "100g" },
        { label: 'Baba ghanoush', id: 27, servingSize: "1 Cup" },
        { label: 'Bacon', id: 28, servingSize: "27g" },
        { label: 'Bagel', id: 29, servingSize: "1 Bagel" },
        { label: 'Baguette', id: 30, servingSize: "0.25 Baguette" },
        { label: 'Baked Alaska', id: 31, servingSize: "1 Slice" },
        { label: 'Baked Beans', id: 32, servingSize: "0.5 Can" },
        { label: 'Baklava', id: 33, servingSize: "1 Slice" },
        { label: 'Banana', id: 34, servingSize: "1 Banana" },
        { label: 'Barley Pearl', id: 35, servingSize: "0.5 Cup" },
        { label: 'Barramundi', id: 36, servingSize: "160g" },
        { label: 'Basmati Rice', id: 37, servingSize: "0.5 Cup" },
        { label: 'Bean Shoots', id: 38, servingSize: "0.5 Cup"},
        { label: 'Beetroot', id: 39, servingSize: "1 Beet" },
        { label: 'Birds nest soup', id: 40, servingSize: "1 Bowl" },
        { label: 'Biscuit', id: 41, servingSize: "1 Biscuit" },
      ]
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
            <IntegrationReactSelect foodSuggestions={this.state.foodSuggestions}/>
            {/* <TextField
              autoFocus
              margin="dense"
              id="servings"
              label="Number of servings"
              type="text"
              fullWidth
              defaultValue="1"
              onChange={this.handleChange}
            /> */}
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