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
  render() {
    return (
      <div>
        <NavBar />
        <Water />
        <Food />
        <Exercise />
        
      </div>
    );
  }
}

export default App;