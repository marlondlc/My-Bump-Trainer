import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DrawerRight from "../SideDrawer/DrawerRight";
import styles from "../../css/NavbarStyles"

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
// };

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    funfact: {
      id: 5,
      email: "",
      name: ""
    }
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth } = this.state;

    // Hardcoded funfact, to be replaced with below ternary fct which finds different elements for specific user logged in
    // const funfactsUser1 = "Your baby is 8 weeks old. It's the size of a rasberry right now!"
    // const funfactsUser2 = "Your baby is 20 weeks old. It's the size of an Artichoke right now!"

    // const open = Boolean(anchorEl);
    // removing anchorEl from const above as defined and not used

    // Ternary variable solving the async backend issue -- IMPLEMENT TODAY WITH MENTOR (FIX AXIOS BUG ASYNC 4th OF MAY)
    // the find will get me an element without the array. So in render {userFunfacts.text} {userFunfacts.image}
    // console.log("SHOW ME THIS", userFunFacts)
    // const userFunFacts = this.props.currentUser.id ? this.state.funfacts.find(element => element.id === this.props.currentUser.id):null
    console.log("PLZ SHOW THIS", this.props.currentUser);

    return (
      <div className={classes.root}>
        <AppBar style={{ margintop: "60px" }} position="fixed">
          <Toolbar>
            {/* {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
            
            <img
              src="/images/symbol.png"
              style={{ width: "auto", height: "80px" , marginRight: "10px"}}
              alt="Logo"
            />
            <div style={{ color: '#DA9DDC' }}>
              <div>My</div>
              <div>Bump</div>
              <div>Trainer</div>
            </div>
            
            <div style={{ color: 'white', fontSize: "20pt", paddingLeft: '2rem'}} >
              <a> {(this.props.currentUser.first_name)} {(this.props.currentUser.last_name)} </a>
            </div>
            {/* <Typography variant="h6" color="inherit" className={classes.grow}>
              {(this.props.currentUser) ? this.props.currentUser.first_name : "Not logged in!" }

              <a>  : Your baby is 20 weeks old ! Equivalent to an Artichoke</a>
              <img src="http://placekitten.com/25/25" alt="Kitten" height="25" width="25" />
            </Typography> */}

            <Typography variant="h6" color="inherit" className={classes.grow} />
            {auth && <DrawerRight />}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
