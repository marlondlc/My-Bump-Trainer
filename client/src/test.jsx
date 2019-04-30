// Chart appearing too far left.
// We could make the charts more modular
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
import chartConfigs from "./charts/water.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";
import waterCylinder from "./charts/watercylinder";
import styles from './style'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class WaterCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    chartConfigs.dataSource.data = this.props.waterEntries;
    waterCylinder.dataSource.value = this.props.totalWater;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Water" className={classes.waterPalette}>
              W
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Your water"
          subheader="Today"
        />
        <ReactFC {...waterCylinder} />

        <CardContent>
          <Typography component="p">
            The recommended water consumption per day for a pregnant woman is 10 eight ounce glasses (2.3 litres)
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" className={classes.waterPalette} >Add water</Button>
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
            <ReactFC {...chartConfigs} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

WaterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WaterCard);

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
import chartConfigs from "./charts/food.jsx";
import foodPyramid from "./charts/foodpyramid.jsx";
import actualfoodPyramid from "./charts/actualfoodpyramid.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import widgets from "fusioncharts/fusioncharts.widgets";
import styles from './style'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
widgets(FusionCharts);

class FoodCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    chartConfigs.dataSource.data = this.props.foodEntries;
    foodPyramid.dataSource.data = this.props.foodPyramid;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Food" className={classes.foodPalette}>
              F
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Your food"
          subheader="Today"
        />
        <ReactFC {...foodPyramid} />

        <CardContent>
          <Typography component="p">
            The recommended calorie consumption per day for a pregnant woman in the first trimester is 1,800.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" className={classes.foodPalette} >Add food</Button>
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
            <ReactFC {...actualfoodPyramid} />
            <ReactFC {...chartConfigs} />
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

FoodCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodCard);

// Chart is showing up too far left. Need to align

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
import chartConfigs from "./charts/exercise.jsx";
// import foodPyramid from "./charts/foodpyramid.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import widgets from "fusioncharts/fusioncharts.widgets";
import exerciseTarget from "./charts/exercisetarget";
import styles from './style'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
widgets(FusionCharts);


class ExerciseCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    chartConfigs.dataSource.data = this.props.exerciseEntries;
    exerciseTarget.dataSource.data = this.props.exerciseType;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Exercise" className={classes.exercisePalette}>
              E
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Your exercise"
          subheader="Today"
        />
         <ReactFC {...exerciseTarget} />

        <CardContent>
          <Typography component="p">
          Women are recommended to get 150 minutes of moderate-intensity physical activity each week (or 20 mins per day) during pregnancy.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Button variant="contained" className={classes.exercisePalette} >Add exercise</Button>
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
            <ReactFC {...chartConfigs} /> 
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ExerciseCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExerciseCard);