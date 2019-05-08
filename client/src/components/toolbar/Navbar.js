import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import DrawerRight from "../SideDrawer/DrawerRight";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
};

// function DotIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 12,13.5A1.5,1.5 0 0,1 10.5,12A1.5,1.5 0 0,1 12,10.5M7.5,10.5A1.5,1.5 0 0,1 9,12A1.5,1.5 0 0,1 7.5,13.5A1.5,1.5 0 0,1 6,12A1.5,1.5 0 0,1 7.5,10.5M16.5,10.5A1.5,1.5 0 0,1 18,12A1.5,1.5 0 0,1 16.5,13.5A1.5,1.5 0 0,1 15,12A1.5,1.5 0 0,1 16.5,10.5Z" />
//     </SvgIcon>
//   );
// }

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
