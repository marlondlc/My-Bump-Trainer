import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import "../css/Home.css"
import FoodCard from '../cards/foodcard';
import ExerciseCard from '../cards/exercisecard';
import WaterCard from '../cards/watercard';
import Navbar from '../components/toolbar/Navbar';
import SideDrawer from '../components/SideDrawer/DrawerRight';
import Backdrop from '../components/Backdrop/Backdrop';
import FullWidthTabs from '../components/toolbar/Navbottom';

class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {
        sideDrawerOpen: false,
        timePeriod: "week",
        trimester: "first",
        totalWater: 2.0,
        totalCalories: 1600,
        totalExercise: 60,  
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
          {/* <main style={{marginTop: '64px'}}>
            <Main />
          </main> */}
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
        <FullWidthTabs/> 
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