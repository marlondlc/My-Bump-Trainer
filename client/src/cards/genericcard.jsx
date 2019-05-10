import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from '../css/style';
import Paper from '@material-ui/core/Paper';

class GenericCard extends React.Component {
  state = { 
    recexpand: false,
    type: this.props.type,
    chart1: true,
   };

  handleChange = panel => (event, recexpand) => {
    this.setState({
      recexpand: recexpand ? panel : false,
    });
  };

  handleClick = () => {
    this.setState({chart1: !this.state.chart1})
  }

  render() {
    const { classes } = this.props;
    const { recexpand } = this.state;
    const panel = this.props.panel;

    return (
      <Card className={classes.card}>
        <CardHeader className={classes.header}
          avatar={
            <Avatar aria-label={this.props.type} className={classes[this.props.type]}>
              {(() => {
                switch (this.state.type) {
                  case "water": return "W";
                  case "food": return "F";
                  case "exercise": return "E";
                  default: return "X";
                }
              })()}
            </Avatar>
          }
          title={(() => {
            switch (this.state.type) {
              case "water": return "Your water";
              case "food": return "Your food";
              case "exercise": return "Your exercise";
              default: return "X";
            }
          })()}
          subheader={this.props.recommendation}
        />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
              {(() => {
                switch (this.state.type) {
                  case "water": return `You drank ${this.props.averageWater} litres.`;
                  case "food": return `You ate ${this.props.averageCalories} calories.`;
                  case "exercise": return `You exercised ${this.props.totalExercise} minutes.`;
                  default: return "X";
                }
              })()}
          </Typography>
          <Typography component="p">
              {(() => {
                switch (this.state.type) {
                  case "water": return "Recommendation: 10 eight ounce glasses (2.3 litres) of water per day";
                  case "food": return `Recommendation for ${this.props.trimester} trimester: ${this.props.recommendedCalories} calories per day.`;
                  case "exercise": return "Recommendation: 20 minutes of moderate-intensity physical activity per day.";
                  default: return "X";
                }
              })()}
          </Typography>
        </Paper>
        {this.state.chart1? <div key='chart1'> {this.props.chart1} </div> : <div key='chart2'> {this.props.chart2} </div>}
        <div className={classes.buttons}>
            <Chip
            label={(() => {
              if (this.state.chart1) {
                switch (this.state.type) {
                  case "water": return "See water intake over time";
                  case "food": return `See Actual Food Pyramid`;
                  case "exercise": return "See exercise over time";
                  default: return "X";
                }
              } else {
                switch (this.state.type) {
                  case "water": return "See total water intake";
                  case "food": return `See Your Food Pyramid`;
                  case "exercise": return "See total exercise by type";
                  default: return "X";
                }
              }
            })()}
            onClick={this.handleClick}
            className={classes.chip}
            />
            <CardActions className={classes.actions} disableActionSpacing>
                {this.props.dialog}
            </CardActions>
          </div>
        <ExpansionPanel className={classes.rec} recexpand={recexpand === {panel}} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h7" component="p">Tips and hints!</Typography>              
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {this.props.message}
                <iframe width="300" height="225"
                src={this.props.video}>
                </iframe> 
            </Typography>
          </ExpansionPanelDetails>      
        </ExpansionPanel>        
      </Card>
    );
  }
}

GenericCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericCard);