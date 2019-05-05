import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Navbar from '../components/toolbar/Navbar';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import Footer from '../components/toolbar/Footer';
import axios from 'axios';


const styles = theme => ({
  card: {
    maxWidth: 800,
    marginTop: 30,
  },
  media: {
    height: 0,
    paddingTop: '5%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    maxWidth: 100,
    maxHeight: 100,
    margin: 10,
    width: 60,
    height: 60,
  },
  // paper: {
  //   padding: theme.spacing.unit * 2,
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
});

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expended: false,
      currentUser: ""
    }
}

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    axios.get(`/api/v1/users/current_user`)
      .then(res => {
        const currentUser = res.data ;
        this.setState({ currentUser });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center">
          <div>
            <div className="navbar-div" style={{height: '100%'}}>
              <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            </div>
          </div>

        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/images/color.png"
            title="User profile picture"
          />
          <Divider/>
          <CardHeader
            avatar={
              <Avatar>
                <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-6.png"
                alt="user icon"/>
              </Avatar>
            }

            title='Sheila Bridges' //{this.state.first_name}
          />

          <CardContent>


            <br/>
            <Grid container spacing={24}>

                <Grid item xs={12} sm={6}>
                    <p>First name: Sheila</p>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <p>Last name: Bridges </p>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <p>DOB: Dec,12,2020 </p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p>Due date: Dec,12,2020 </p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p>Weight: 190lbs</p>
                </Grid>

           </Grid>

          </CardContent>


          </Card>
          </Grid>
        <Footer/>
      </div>

    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserProfile);