import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from '../css/style'

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
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={(() => {
            switch (this.state.type) {
              case "water": return "Your water";
              case "food": return "Your food";
              case "exercise": return "Your exercise";
              default: return "X";
            }
          })()}
          subheader={this.props.timePeriod}
        />
        {this.props.chart1}
        <CardContent>
          <Typography component="p">
            {(() => {
                switch (this.state.type) {
                  case "water": return "The recommended water consumption per day for a pregnant woman is 10 eight ounce glasses (2.3 litres)";
                  case "food": return "The recommended calorie consumption per day for a pregnant woman in the first trimester is 1,800.";
                  case "exercise": return "The recommended exercise for a pregnant woman is 150 minutes of moderate-intensity physical activity per week (or 20 mins per day).";
                  default: return "X";
                }
              })()}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" className={classes[this.props.type]} >Add {this.props.type}</Button>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
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