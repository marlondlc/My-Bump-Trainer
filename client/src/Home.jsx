import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import "./css/Home.css"
import FoodCard from './cards/foodcard';
import ExerciseCard from './cards/exercisecard';
import WaterCard from './cards/watercard';
// import Advice from '../advice/advice'
import Navbar from './components/toolbar/Navbar';
import FullWidthTabs from './components/toolbar/Navbottom';
// import { UserForm } from './user -NOT BEING USED/UserForm';
import Footer from './components/toolbar/Footer';

class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
        sideDrawerOpen: false,
        timePeriod: "day",
        trimester: "first",
        currentUser: this.props.currentUser
      }
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

            {/* <SideDrawer show={this.state.sideDrawerOpen} />
              {Backdrop} */}
            {/* <main style={{marginTop: '64px'}}>
              <Main />
            </main> */}
          </div>
          <div>
          <FullWidthTabs switchTab={this.switchTab}/>
</div>
        </div>
        {localStorage.getItem('jwt') &&
        <div style={{padding: '10px 0 100px 0'}}>
          <div className="components">
            <WaterCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod} totalWater={this.state.totalWater} waterEntries={this.state.waterEntries}/>
            <FoodCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod} trimester={this.state.trimester} totalCalories={this.state.totalCalories} foodEntries={this.state.foodEntries} foodPyramid={this.state.foodPyramid}/>
            <ExerciseCard currentUser={this.props.currentUser} timePeriod={this.state.timePeriod} totalExercise={this.state.totalExercise} exerciseType={this.state.exerciseType} exerciseEntries={this.state.exerciseEntries} />
            {/* <Advice timePeriod={this.state.timePeriod} /> */}
                
          </div>
        </div>
        }
        <Footer/>
      </div>
  );
}
}

// const Homepage = () => {

//     return (

//         <div>
//           <p>Home page content</p>
//           <div className="btn-display">
//           </div>
//         </div>
//     );
// }

export default Home