import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import classNames from "classnames";
import Esme from "../SideDrawer/Esme";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid className={classes.subFooter} item xs={12}>
          <div className={classes.footer}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={"span"}
          >
            © {currentYear} Bump Trainer Inc
          </Typography>
          <Esme />
          </div>
        </Grid>
      </div>
    );
  }
}

const styles = {
  root: {
    marginTop: 30,
    backgroundColor: `#26418f`,
    borderTop: "solid 3px #5c6bc0",
    paddingTop: "10px",
    overflowX: "hidden",
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
  footerSections: {
    margin: "0 10px"
  },
  subFooter: {
    backgroundColor: "#5c6bc0",
    padding: "8px 16px 8px 16px",
    marginTop: "8px",
    fontSize: "1px"
  },
  footerText: {
    color: "#fff",
    fontSize: "10px",
    lineHeight: 1.5
  },

  white: {
    color: "#ffffff"
  },
  flexContainer: {
    display: "flex"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between"
  }
};

export default withStyles(styles)(Footer);
