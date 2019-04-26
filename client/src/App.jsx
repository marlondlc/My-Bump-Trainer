import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import Water from './water.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Water />
      </div>
    );
  }
}

export default App;