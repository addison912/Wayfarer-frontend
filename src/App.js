import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import CitiesContainer from "./containers/CitiesContainer";
import ProfileContainer from "./containers/ProfileContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <CitiesContainer path="/" />
          <ProfileContainer path="/profile/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
