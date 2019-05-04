import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import "../css/Home.css"
import FoodCard from '../cards/foodcard';
import ExerciseCard from '../cards/exercisecard';
import WaterCard from '../cards/watercard';
import Navbar from '../components/toolbar/Navbar';
// import SideDrawer from '../components/SideDrawer/DrawerRight';
// import Backdrop from '../components/Backdrop/Backdrop';
import FullWidthTabs from '../components/toolbar/Navbottom';
// import { UserForm } from './user -NOT BEING USED/UserForm';
import Footer from '../components/toolbar/Footer';

class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
        sideDrawerOpen: false,
        timePeriod: "week",
        trimester: "first"
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
        <div>
          <div className="components">
            <WaterCard timePeriod={this.state.timePeriod} totalWater={this.state.totalWater} waterEntries={this.state.waterEntries}/>
            <FoodCard timePeriod={this.state.timePeriod} trimester={this.state.trimester} totalCalories={this.state.totalCalories} foodEntries={this.state.foodEntries} foodPyramid={this.state.foodPyramid}/>
            <ExerciseCard timePeriod={this.state.timePeriod} totalExercise={this.state.totalExercise} exerciseType={this.state.exerciseType} exerciseEntries={this.state.exerciseEntries} />
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