import React, { Component } from "react";
import { Router, redirectTo, Redirect } from "@reach/router";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import axios from "axios";
const constants = require("./config/constants");

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      currentCity: "",
      profilePic: "#",
      loggedIn: false,
      signUpModalStyle: { display: "none" },
      loginModalStyle: { display: "none" }
    };
  }

  // function checkForLogin(){
  //   if(localStorage.token){
  //     let jwt = localStorage.token

  //   }
  //   }

  toggleSignUpModal = () => {
    this.state.signUpModalStyle.display === "none"
      ? this.setState({
          signUpModalStyle: { display: "flex" }
        })
      : this.setState({
          signUpModalStyle: { display: "none" }
        });
  };

  toggleLoginModal = () => {
    this.state.loginModalStyle.display === "none"
      ? this.setState({
          loginModalStyle: { display: "flex" }
        })
      : this.setState({
          loginModalStyle: { display: "none" }
        });
  };

  handleSignUp = e => {
    e.preventDefault();
    let newUser = {};
    newUser.username = document.getElementById("signup-username").value;
    newUser.email = document.getElementById("signup-email").value;
    newUser.currentCity = document.getElementById("signup-currentCity").value;
    newUser.profilePic = document.getElementById("signup-profilePic").value;
    newUser.password = document.getElementById("signup-password").value;
    console.log(newUser);
    let joinDate = new Date();
    axios
      .post(`${constants.server}/user/signup`, {
        username: this.state.username,
        email: this.state.email,
        password: newUser.password,
        currentCity: this.state.currentCity,
        profilePic: this.state.profilePic,
        joinDate: joinDate
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          username: newUser.username,
          email: newUser.email,
          currentCity: newUser.currentCity,
          profilePic: newUser.profilePic,
          loggedIn: true
        });
        this.toggleSignUpModal();
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 409) {
          alert(err.response.data.message);
        }
      });
  };

  handleLogin = e => {
    e.preventDefault();
    console.log("login clicked");
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    axios
      .post(`${constants.server}/user/login`, {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response);
        localStorage.token = response.data.token;
        this.toggleLoginModal();
        this.setState({
          username,
          password,
          loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401 && err.response.data.message) {
          alert(err.response.data.message);
        }
      });
  };

  handleLogOut = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      currentCity: "",
      profilePic: "#",
      loggedIn: false
    });
    localStorage.clear();
  };

  render() {
    return (
      <div className="App">
        <Header
          username={this.state.username}
          loggedIn={this.state.loggedIn}
          handleInput={this.handleInput}
          handleSignUp={this.handleSignUp}
          toggleSignUpModal={this.toggleSignUpModal}
          toggleLoginModal={this.toggleLoginModal}
          signUpModalStyle={this.state.signUpModalStyle}
          loginModalStyle={this.state.loginModalStyle}
          handleLogOut={this.handleLogOut}
          handleLogin={this.handleLogin}
        />
        <Router>
          <HomeContainer path="/" loggedIn={this.state.loggedIn} />
          <ProfileContainer
            loggedIn={this.state.loggedIn}
            username={this.state.username}
            path="/profile/:username"
          />
        </Router>
      </div>
    );
  }
}

export default App;
