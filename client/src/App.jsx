import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import FoodCard from './food.jsx';
import Exercise from './exercise';
import WaterCard from './watercard.jsx';
// import MyComponent from './test'
require('typeface-roboto')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          spacing: '16',  
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
              value: "1"
            },
            {
              label: "Fats, spreads and oils",
              value: "3"
            },
            {
              label: "Meat, poultry, fish, eggs, beans and nuts",
              value: "13"
            },
            {
              label: "Milk, yoghurt and cheese",
              value: "18"
            },
            {
              label: "Wholemeal cereals and breads, potatoes, pasta and rice",
              value: "25"
            },
            {
              label: "Vegetables, salad and fruit",
              value: "40"
            }
          ]
        }
    }
    render() {
      return (
        <div>
          <NavBar />
          <WaterCard waterEntries={this.state.waterEntries}/>
          <FoodCard foodEntries={this.state.foodEntries} foodPyramid={this.state.foodPyramid}/>
          <Exercise />
          {/* <MyComponent foodPyramid={this.state.foodPyramid}/> */}
        </div>
    );
  }
}

export default App;