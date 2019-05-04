import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from '../css/style';

class GenericCard extends React.Component {
  state = { 
    expanded: false,
    type: this.props.type,
   };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
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
          subheader={"Your " + this.props.timePeriod}
        />
        {this.props.chart1}
        <CardContent>
          <Typography component="p">
            {(() => {
                switch (this.state.type) {
                  case "water": return "Recommendation: 10 eight ounce glasses (2.3 litres) of water per day";
                  case "food": return `Recommendation ${this.props.trimester} trimester: ${this.props.recommendedCalories} calories per day.`;
                  case "exercise": return "Recommendation: 20 minutes of moderate-intensity physical activity per day.";
                  default: return "X";
                }
              })()}
          </Typography>
          <Typography component="p">
            {(() => {
                switch (this.state.type) {
                  case "water": return `Actual: ${this.props.averageWater} litres. ${this.props.message}`;
                  case "food": return `Actual: ${this.props.averageCalories} calories. ${this.props.message}`;
                  case "exercise": return `Actual: ${this.props.totalExercise} minutes. ${this.props.message}`;
                  default: return "X";
                }
              })()}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            {this.props.dialog}
          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.chart2}
            {this.props.chart3}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

GenericCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericCard);