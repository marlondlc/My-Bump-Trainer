import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import styles from '../../css/style'
import "../../css/App.css";


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

    const sideList = (
      <div className={classes.list}>
            <iframe
                allow="microphone;"
                width="100%"
                height="800"
                src="https://console.dialogflow.com/api-client/demo/embedded/1ace6817-a7da-43bd-99d9-b70cc8a4274d">
            </iframe>
      </div>
    );



    return (
      <div>

        <Button className={classes.Esme} variant="outlined" onClick={this.toggleDrawer('right', true)}>Ask Esme</Button>

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