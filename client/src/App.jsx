import React, { Component } from "react";
import "./App.css";
import NavBar from './Navbar.jsx';
import Water from './water.jsx';
import NavFooter from './NavFooter.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Water />
        <NavFooter />
      </div>
    );
  }
}

export default App;