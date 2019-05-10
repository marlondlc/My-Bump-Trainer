import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SvgIcon from '@material-ui/core/SvgIcon';
// import Link from "react-router-dom"

const styles = {
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  image: {
    justifyContent: 'center',
    display: 'flex',
    marginbottom: '20px'
  }
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function ProfileIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22,4H14V7H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,18H14V16H20V18M20,14H14V12H20V14M20,10H14V8H20V10M13,6H11V2H13V6Z" />
    </SvgIcon>
  );
}

class DrawerRight extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    let spanstyle = {
      color:"white",
      fontSize:"50px",
      verticalAlign: "middle"
    }

    const sideList = (
      <div className={classes.list}>
        <List>
          <div className={classes.image}>
            <img alt="user" src="/images/avatar_icon.png"/>
          </div>

          {['Logout'].map((text) => (
            <a href="/login">
              <ListItem button key={text}>
                <ListItemIcon> <AccountCircle className={classes.icon} color="primary"/> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>

        <List>
          {['Profile'].map((text) => (
            < a href="/profile">
            <ListItem button key={text}>
              <ListItemIcon><ProfileIcon className={classes.icon} color="primary"/> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </a>
          ))}
        </List>

        <List>
          {['Home'].map((text) => (
            <a href='/'>
            <ListItem button key={text}>
              <ListItemIcon><HomeIcon className={classes.icon} color="primary" /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </a>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true)}><span style={spanstyle}><MoreVert style={{fontSize:"40px"}}/></span></Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerRight);