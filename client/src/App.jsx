import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import FoodCard from './food.jsx';
import Exercise from './exercise';
import WaterCard from './watercard.jsx';
// import GenericCard from './genericcard.jsx';
// import MyComponent from './test'
require('typeface-roboto')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    render() {
      return (
        <div>
          <NavBar />
          <div className="components">
            <WaterCard timePeriod={this.state.timePeriod} totalWater={this.state.totalWater} waterEntries={this.state.waterEntries}/>
            <FoodCard foodEntries={this.state.foodEntries} foodPyramid={this.state.foodPyramid}/>
            <Exercise exerciseType={this.state.exerciseType} exerciseEntries={this.state.exerciseEntries} />
            {/* <MyComponent /> */}
          </div>
        </div>
    );
  }
}

export default App;