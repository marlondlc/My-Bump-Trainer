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
import styles from "../css/userProfile"


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
        const currentUser = localStorage.getItem("currentUser")
        this.setState({ currentUser });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { classes, currentUser } = this.props;

    return (
      <div>
        <Grid container justify="center">
          <div>
            <div className="navbar-div" style={{height: '100%'}}>
              <Navbar drawerClickHandler={this.drawerToggleClickHandler} currentUser={this.props.currentUser}/>
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

            title={currentUser.first_name + ' ' + currentUser.last_name} //{this.state.first_name}
          />

          <CardContent>
            <br/>
            <Grid container spacing={24}>

                <Grid item xs={12} sm={6}>
                    <p><strong>Firstname: </strong>{currentUser.first_name}</p>

                </Grid>

                <Grid item xs={12} sm={6}>
                    <p><strong>Lastname: </strong>{currentUser.last_name}</p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p><strong>Email: </strong>{currentUser.email}</p>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <p><strong>Birthday : </strong>{currentUser.dob}</p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p><strong>Due Date: </strong>{currentUser.due_date} </p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p><strong>Weight: </strong>{currentUser.initial_weight}</p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p><strong>Height: </strong>{currentUser.height}</p>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <p><strong>Watter bottle: </strong>{currentUser.water_bottle}</p>
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