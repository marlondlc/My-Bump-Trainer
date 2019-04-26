import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import Water from './water.jsx';
import Food from './food.jsx';
import Exercise from "./exercise";

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