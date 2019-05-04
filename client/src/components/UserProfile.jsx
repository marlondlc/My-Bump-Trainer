import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/toolbar/Navbar';
// import CardActions from '@material-ui/core/CardActions';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import SideDrawer from '../components/SideDrawer/DrawerRight';
// import Backdrop from '../components/Backdrop/Backdrop';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/toolbar/Footer';


const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '40%', // 16:9
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
});

class UserProfile extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

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
            <h5>
              BIO:
            </h5>
            <Typography component="subtitle2">
              Enim hot chicken subway tile, yuccie est keytar distillery selvage offal portland iceland. Tumeric roof party flannel, cillum +1 taiyaki unicorn paleo hot chicken stumptown. Consequat shaman shabby chic, incididunt veniam chartreuse hashtag mollit. Plaid polaroid neutra tilde. Squid drinking vinegar ugh narwhal 3 wolf moon YOLO palo santo chillwave normcore dolore jianbing mollit et VHS. Vaporware fixie aliquip est irony woke veniam vape meh.
              <br/>
              Oh. You need a little dummy text for your mockup? How quaint.
              <br/>
              I bet you’re still using Bootstrap too…
            </Typography>
            <br/>
            <Typography component="p">
            last_name
            </Typography>
            <Typography component="p">
            Due date
            </Typography>
            <Typography component="p">
            last_name
            </Typography>
            <Typography component="p">
            Due date
            </Typography>
            <Typography component="p">
            last_name
            </Typography>
            <Typography component="p">
            Due date
            </Typography>

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