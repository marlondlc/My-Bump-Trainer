import React, { Component } from "react";
import "./App.css";

// NAV BAR REACT IMPORTS ----------------

// import NavFooter from './NavFooter'
import Navbar from './components/toolbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// REACT ROUTER IMPORTS ----------------
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navigation from "./components/Navigation"

// ROUTE COMPONENTS HERE : ----------------
import Homepage from "./components/Home"
import WaterForm from "./components/FormsPages/WaterForm"
import FoodForm from "./components/FormsPages/FoodForm"
import ExerciseForm from "./components/FormsPages/ExerciseForm"
import Error from "./components/Error"

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="navbar-div" style={{height: '100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        </main>
        <BrowserRouter>
          <div>
            <Navigation />
          <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/waterform" component={WaterForm} exact/>
          <Route path="/exerciseform" component={ExerciseForm} exact/>
          <Route path="/foodform" component={FoodForm} exact/>
          <Route component={Error} />
          </Switch>
          </div>
        </BrowserRouter>
        
      </div>

    );
  }
}

export default App;