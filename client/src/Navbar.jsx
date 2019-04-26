import React, { Component } from 'react';
import logo from './logo.svg';
import './Navbar.css'
import { Navbar, Container } from 'react-bootstrap'
// import User from './User.jsx';



class NavBar extends Component{

    render(){
        return(
          <Navbar className="nav-list">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="http://placehold.it/50x50"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Profile '}
          </Navbar.Brand>
        </Navbar>
        )
      }
}

export default NavBar;