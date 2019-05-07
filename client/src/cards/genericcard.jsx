import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from '../css/style';
import Paper from '@material-ui/core/Paper';

class GenericCard extends React.Component {
  state = { 
    expanded: false,
    recexpand: false,
    type: this.props.type,
    chart1: true,
   };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
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
          // action={
          //   <IconButton>
          //     <MoreVertIcon />
          //   </IconButton>
          // }
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
        {/* Put something in here to show the total water/exercise/food that they have done */}
        {/* {this.props.averageWater} */}
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
        <ExpansionPanel className={classes.rec} recexpand={recexpand === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h7" component="p">Tips and hints!</Typography>              
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {this.props.message}
              <br/>Here's a video that might help!<br/>
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