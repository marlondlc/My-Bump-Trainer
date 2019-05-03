import React, { Component } from "react";
import "./css/App.css";

// REACT ROUTER IMPORTS ----------------
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Navigation from "./components/Navigation"

// AUTHENTICATION IMPORTS ------------
import Login from "./authentication/login"
import Logout from "./authentication/logout"
// import Api from "./authentication/Api"

// ROUTE COMPONENTS HERE : ----------------
import Homepage from "./components/Home"
import Error from "./components/Error"

require('typeface-roboto')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          timePeriod: "day",
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

    render() {
      return (
        <div>
          <div className="navbar-div" style={{height: '100%'}}>
            <main style={{marginTop: '64px'}}>
              <Main />
            </main>
          </div>
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
          <Route component={Error} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default App;