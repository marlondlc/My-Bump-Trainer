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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Link from "react-router-dom"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class DrawerRight extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['login/logout'].map((text, index) => (
            <a href="/login">
              <ListItem button key={text}>
                <ListItemIcon> <AccountCircle /> </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
        <Divider />
        <List>
          {['My account', 'Home'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );



    return (
      <div>

        <Button onClick={this.toggleDrawer('right', true)}><span styles={{color:"white"}}><AccountCircle/></span></Button>

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