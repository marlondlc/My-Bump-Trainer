import React, { Component } from "react";
import "./css/App.css";

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
// import AddFood from "./forms/addFood"
// import AddWater from "./forms/addWater"
// import AddExercise from "./forms/addExercise"
// import Water from "./water"

import FoodCard from './cards/foodcard';
import ExerciseCard from './cards/exercisecard';
import WaterCard from './cards/watercard';
// import GenericCard from './genericcard.jsx';
// import MyComponent from './test'
require('typeface-roboto')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sideDrawerOpen: false,
          timePeriod: "Today",  
          waterEntries: [
              {
                  "label": "6am",
                  "value": "0"
              },      
              {
                  "label": "8am",
                  "value": "880"
              },  
              {
                  "label": "10am",
                  "value": "880"
              },
              {
                  "label": "12pm",
                  "value": "880"
                },
                {
                  "label": "2pm",
                  "value": "1200"
                },
                {
                  "label": "4pm",
                  "value": "1640"
                },
                {
                  "label": "6pm",
                  "value": "1860"
                },
                {
                  "label": "8pm",
                  "value": "2200"
                },
                {
                  "label": "10pm",
                  "value": "2200",
                }
            ],
          foodEntries: [
            {
                "label": "6am",
                "value": "0"
            },      
            {
                "label": "8am",
                "value": "1000"
            },  
            {
                "label": "10am",
                "value": "1000"
            },
            {
                "label": "12pm",
                "value": "3000"
              },
              {
                "label": "2pm",
                "value": "3000"
              },
              {
                "label": "4pm",
                "value": "3050"
              },
              {
                "label": "6pm",
                "value": "3050"
              },
              {
                "label": "8pm",
                "value": "7050"
              },
              {
                "label": "10pm",
                "value": "8050",
              }
          ], 
          foodPyramid: [
            {
              label: "Food and drinks high in fat, sugar and salt",
              value: "15"
            },
            {
              label: "Fats, spreads and oils",
              value: "11"
            },
            {
              label: "Meat, poultry, fish, eggs, beans and nuts",
              value: "14"
            },
            {
              label: "Milk, yoghurt and cheese",
              value: "8"
            },
            {
              label: "Wholemeal cereals and breads, potatoes, pasta and rice",
              value: "40"
            },
            {
              label: "Vegetables, salad and fruit",
              value: "12"
            }
          ],
          exerciseEntries: [
            {
                "label": "6am",
                "value": "0"
            },      
            {
                "label": "8am",
                "value": "30"
            },  
            {
                "label": "10am",
                "value": "0"
            },
            {
                "label": "12pm",
                "value": "0"
              },
              {
                "label": "2pm",
                "value": "0"
              },
              {
                "label": "4pm",
                "value": "0"
              },
              {
                "label": "6pm",
                "value": "30"
              },
              {
                "label": "8pm",
                "value": "0"
              },
              {
                "label": "10pm",
                "value": "0",
              }
          ],
          totalWater: 2.0,
          exerciseType: [
            {
              label: "Aerobic",
              value: "30"
            },
            {
              label: "Strength",
              value: "15"
            },
            {
              label: "Flexibility",
              value: "60"
            },
            {
              label: "Balance",
              value: "15"
            }
          ]
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

    render() {
      return (
        <div>
          <div className="navbar-div" style={{height: '100%'}}>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
              {Backdrop}
            <main style={{marginTop: '64px'}}>
              <Main />
            </main>
          </div>
          {localStorage.getItem('jwt') &&
          <div>
            <div className="components">
              <WaterCard timePeriod={this.state.timePeriod} totalWater={this.state.totalWater} waterEntries={this.state.waterEntries}/>
              <FoodCard timePeriod={this.state.timePeriod} foodEntries={this.state.foodEntries} foodPyramid={this.state.foodPyramid}/>
              <ExerciseCard timePeriod={this.state.timePeriod} exerciseType={this.state.exerciseType} exerciseEntries={this.state.exerciseEntries} />
            </div>
          </div>
          } 
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
          {/* <Route path="/waterform" component={AddWater} exact/>
          <Route path="/exerciseform" component={AddExercise} exact/>
          <Route path="/foodform" component={AddFood} exact/> */}
          <Route component={Error} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default App;