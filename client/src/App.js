import React, { Component } from 'react';
import './App.css';
import NavBar from './Navbar.js';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    currentUser: {
      email:'hannah@boss.ca'
    }, 
    messages: []
  }

  handleOnOpen = (evt) => {
    console.log('connected to Rails server');
  }

  handleOnError = (evt) => {
    console.log('Uh Oh ... something happened, please reconnect!');
  }

  componentDidMount() {
    // How do we connect to the Rails server here
    const socketUrl = 'ws://localhost:3001';
    
    this.socket = new WebSocket(socketUrl);
    this.socket.onopen = this.handleOnOpen;
    this.socket.onmessage= this.handleOnMessage;
    this.socket.onerror = this.handleOnError;
 
  }

  handleOnMessage = message => {

    const parsedReceivedMsg = JSON.parse(message.data);

      switch(parsedReceivedMsg.type) {
        case 'incomingProfile':
        this.setState({messages:[...this.state.messages, parsedReceivedMsg],});
        break; 
      }
  };

  render() {
    return (
      <div className="App">
      <NavBar />
      {/* <Water />
      <Food />
      <Exercise /> */}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
