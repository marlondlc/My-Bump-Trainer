import React, { Component } from 'react';
import logo from './logo.svg';
import './Navbar.css'
// import User from './User.jsx';



class NavBar extends Component{

    render(){
        return(
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        )
        }
}

export default NavBar;