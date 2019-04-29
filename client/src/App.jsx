import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import Water from './water.jsx';
import Food from './food.jsx';
import Exercise from "./exercise";
require('typeface-roboto')
import WaterCard from "./test.jsx"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          spacing: '16',  
          waterEntries: [
              {
                  "label": "6am",
                  "value": "0"
              },      
              {
                  "label": "8am",
                  "value": "880"
              },  
              {
                  "label": "10am",
                  "value": "880"
              },
              {
                  "label": "12pm",
                  "value": "880"
                },
                {
                  "label": "2pm",
                  "value": "1200"
                },
                {
                  "label": "4pm",
                  "value": "1640"
                },
                {
                  "label": "6pm",
                  "value": "1860"
                },
                {
                  "label": "8pm",
                  "value": "2200"
                },
                {
                  "label": "10pm",
                  "value": "2200",
                }
            ]
        }
    }
    render() {
      const { classes } = this.props;
      const { spacing } = this.state;
      return (

        <div>

          <NavBar />
          <WaterCard />
          <Water waterEntries={this.state.waterEntries} />
          <Food waterEntries={this.state.waterEntries}/>
          <Exercise />
          <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                <Grid key="1" item>
                  <Paper className={classes.paper}>Something</Paper>
                </Grid>
                <Grid key="2" item>
                  <Paper className={classes.paper} />
                </Grid>
                <Grid key="3" item>
                  <Paper className={classes.paper} />
                </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (App);