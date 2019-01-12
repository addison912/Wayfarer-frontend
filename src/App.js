import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: "addison912",
        password: ""
      },

      loggedIn: false
    };
  }

  // function checkForLogin(){
  //   if(localStorage.length > 0){
  //     let jwt = localStorage.token

  //   }
  //   }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Router>
          <HomeContainer path="/" loggedIn={this.state.loggedIn} />
          <ProfileContainer path="/profile/:username" user={this.state.user} />
        </Router>
      </div>
    );
  }
}

export default App;
