import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import axios from "axios";

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
    this.setState({
      username: newUser.username,
      email: newUser.email,
      currentCity: newUser.currentCity,
      profilePic: newUser.profilePic
    });
    let joinDate = new Date();
    axios
      .post("http://localhost:3001/user/signup", {
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
          loggedIn: true
        });
        this.toggleSignUpModal();
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 409) {
          alert("This username is taken! Please try another.");
        }
      });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
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
        />
        <Router>
          <HomeContainer path="/" loggedIn={this.state.loggedIn} />
          <ProfileContainer path="/profile/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
