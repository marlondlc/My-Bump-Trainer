import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={12} sm={4}>
            <div typeof="Organization">
              <span property="name">Noname - company or bumpTrainer</span>
              <div property="address" typeof="PostalAddress">
                <span property="streetAddress">1234 Mcgill Boulevard</span>
                <span property="addressLocality" style={{ display: "block" }}>
                  Montreal, Quebec
                </span>
                <span property="postalCode">H5E 2K6</span>
              </div>
              <span property="telephone">(800) 454-2233</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: "center" }}
                item
                xs={12}
              />
              TESTING => Put fun fact here!
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyle: "none", margin: 0 }}>
              <li />
            </ul>
          </Grid>
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={"span"}
          >
            © {currentYear} No name Company!!! fix this
          </Typography>
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
    paddingTop: "16px",
    overflowX: "hidden"
  },
  footerSections: {
    margin: "0 16px"
  },
  subFooter: {
    backgroundColor: "#5c6bc0",
    padding: "8px 16px 8px 16px",
    marginTop: "8px"
  },
  footerText: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: 1.5
  },
  // invertedBtnDark: {
  //   color: "#fff",
  //   backgroundColor: "transparent",
  //   border: "2px #fff solid",
  //   boxShadow: "none",
  //   margin: "8px"
  // },
  white: {
    color: "#ffffff"
  },
  flexContainer: {
    display: "flex"
  }
};

export default withStyles(styles)(Footer);