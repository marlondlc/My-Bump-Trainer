import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import "../css/Home.css"
import FoodCard from './cards/foodcard';
import ExerciseCard from './cards/exercisecard';
import WaterCard from './cards/watercard';
// import Advice from '../advice/advice'
import Navbar from './components/toolbar/Navbar';
import FullWidthTabs from './components/toolbar/Navbottom';
// import { UserForm } from './user -NOT BEING USED/UserForm';
import Footer from './components/toolbar/Footer';
import isLoading from './isloading'

class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
        sideDrawerOpen: false,
        timePeriod: "day",
        trimester: "first",
        }
        // currentUser: this.props.currentUser
      }
  

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  switchTab = (value) => {
    this.setState({timePeriod: value})
  }

  componentDidMount = () => {
    if (!this.props.currentUser) {
      this.props.history.push("/login");
    }
  }

  

  render() {
    return (
      <div>
        <div>
          <div className="navbar-div" style={{height: '100%'}}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} currentUser={this.props.currentUser}/>
          </div>
          <div>
          <FullWidthTabs switchTab={this.switchTab}/>
        </div>
        </div>
        {localStorage.getItem('jwt') &&
        <div style={{padding: '10px 0 100px 0'}}>
          <div className="components">
            <WaterCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod}/>
            <FoodCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod} trimester={this.state.trimester} />
            <ExerciseCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod} trimester={this.state.trimester} />
          </div>
        </div>
        }
        <Footer/>
      </div>
  );
  }
}


export default Home