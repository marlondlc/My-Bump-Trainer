import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import Water from './water.jsx';
import Food from './food.jsx';
import Exercise from "./exercise";
// import AddWater from "./forms/addWater";
// import AddFood from "./forms/addFood";
// import AddExercise from "./forms/addExercise";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waterEntries: [
                {
                id: 1,
                volume: 440,
                drunk_at: 8 
                },
                {
                id: 2,
                volume: 440,
                drunk_at: 10 
                },
                {
                id: 3,
                volume: 440,
                drunk_at: 12 
                },
                {
                id: 4,
                volume: 440,
                drunk_at: 14 
                },
                {
                id: 5,
                volume: 440,
                drunk_at: 16 
                },
            ]
        }
    }
    render() {
    return (
      <div>
        <NavBar />
        <Water waterEntries={this.state.waterEntries} />
        <Food />
        <Exercise />
      </div>
    );
  }
}

export default App;