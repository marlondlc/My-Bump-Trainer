import React, { Component } from "react";
import "./App.css";

// NAV BAR REACT IMPORTS ----------------
// import NavFooter from './NavFooter'
import Navbar from './components/toolbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
// import ControlledTabs from './components/toolbar/ControlledTabs';


// REACT ROUTER IMPORTS ----------------
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navigation from "./components/Navigation"

// AUTHENTICATION IMPORTS ------------
import Login from "./authentication/login"
import Logout from "./authentication/logout"
// import Api from "./authentication/Api"


// ROUTE COMPONENTS HERE : ----------------
import Homepage from "./components/Home"
// import WaterForm from "./components/FormsPages/WaterForm"
// import FoodForm from "./components/FormsPages/FoodForm"
// import ExerciseForm from "./components/FormsPages/ExerciseForm"
import Error from "./components/Error"
import AddFood from "./forms/addFood"
import AddWater from "./forms/addWater"
import AddExercise from "./forms/addExercise"
// import Water from "./water"



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
        {/* <Water /> */}
        </main>
        <Main />
      </div>
      

    );
  }
}

// ALL APP ROUTES GO HERE ! ****
const Main = () => (
<BrowserRouter>
<div>
  <Navigation />
<Switch>
<Route path="/login" component={Login} exact />
<Route path="/logout" component={Logout} exact />
<Route path="/" component={Homepage} exact />
<Route path="/waterform" component={AddWater} exact/>
<Route path="/exerciseform" component={AddExercise} exact/>
<Route path="/foodform" component={AddFood} exact/>
<Route component={Error} />
</Switch>
</div>
</BrowserRouter>

);

export default App;