import React, { Component } from "react";
import "./css/App.css";

// REACT ROUTER IMPORTS ----------------
import { BrowserRouter, Route, Switch} from "react-router-dom"
// import Navigation from "./components/Navigation"

// AUTHENTICATION IMPORTS ------------
import Login from "./authentication/login"
import Logout from "./authentication/logout"
// import userProfile from "./components/userProfile"
// import Users from './components/user -NOT BEING USED/UserForm'
// import Api from "./authentication/Api"

// ROUTE COMPONENTS HERE : ----------------
import Homepage from "./components/Home"
import Error from "./components/Error"
import UserProfile from "./components/UserProfile"

require('typeface-roboto')


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          timePeriod: "day",
          currentUser: ''
        }
    }

    updateCurrentUser = (user) => {
      this.setState({currentUser: user})
    }

    render() {
      return (
        <div>
          <div className="navbar-div" style={{height: '100%'}}>
            <main style={{marginTop: '64px'}}>
            <BrowserRouter>
              <div>
                {/* <Navigation /> */}
                  <Switch>
                    <Route path="/login" render={(routeProps) => (
                      <Login {...routeProps} updateCurrentUser={this.updateCurrentUser}/>
                      )} />
                    <Route path="/logout" component={Logout} exact />
                    {/* <Route path="/profile" render={(props) => (
                      <UserProfile {...props} currentUser={this.state.currentUser} />
                    )} /> */}
                    <Route path="/:handle" render={(props) => (
                      <UserProfile {...props} currentUser={this.state.currentUser} />
                      )} />
                    <Route path="/" render={(props) => (
                      <Homepage {...props} currentUser={this.state.currentUser} />
                      )} />
                    <Route component={Error} />
                  </Switch>
              </div>
              </BrowserRouter>
            </main>
          </div>
        </div>
    );
  }
}


export default App;