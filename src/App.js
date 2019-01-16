import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import Header from "./components/Header";
import HomeContainer from "./containers/HomeContainer";
import ProfileContainer from "./containers/ProfileContainer";
import axios from "axios";
const constants = require("./config/constants");

class App extends Component {
  constructor() {
    super();

    this.state = {
      userId: "",
      username: "",
      email: "",
      currentCity: "",
      profilePic: "",
      loggedIn: false,
      signUpModalStyle: { display: "none" },
      loginModalStyle: { display: "none" },
      postModalStyle: { display: "none" },
      postPic: ""
    };
  }

  checkForLogin() {
    if (localStorage.token) {
      this.setState({
        loggedIn: true
      });
    }
  }

  toggleSignUpModal = () => {
    this.state.signUpModalStyle.display === "none"
      ? this.setState({
          signUpModalStyle: { display: "flex" }
        })
      : this.setState({
          signUpModalStyle: { display: "none" }
        });
  };

  togglePostModal = (e) => {
    e.preventDefault()
    console.log("togglePostModalClicked")
    this.state.postModalStyle.display === "none"
      ? this.setState({
          postModalStyle: { display: "flex" }
        })
      : this.setState({
          postModalStyle: { display: "none" }
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

  togglePostModal = () =>
    this.state.postModalStyle.display === "none"
      ? this.setState({
          postModalStyle: { display: "flex" }
        })
      : this.setState({
          postModalStyle: { display: "none" }
        });

  handleSignUp = e => {
    e.preventDefault();
    let joinDate = new Date();
    let newUser = new FormData();
    newUser.append(
      "username",
      document.getElementById("signup-username").value
    );
    newUser.append("email", document.getElementById("signup-email").value);
    newUser.append(
      "currentCity",
      document.getElementById("signup-currentCity").value
    );
    newUser.append("profilePic", this.state.profilePic);
    newUser.append(
      "password",
      document.getElementById("signup-password").value
    );
    newUser.append("joinDate", joinDate);
    console.log(newUser);

    axios({
      method: "POST",
      url: `${constants.server}/user/signup`,
      data: newUser,
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    })
      .then(response => {
        navigate(`/profile/${response.data.result.username}`);
        console.log(response.data);
        localStorage.token = response.data.token;
        this.setState({
          username: response.data.result.username,
          email: response.data.result.email,
          currentCity: response.data.result.currentCity,
          profilePic: response.data.result.profilePic,
          loggedIn: true,
          userId: response.data.result._id
        });
        this.toggleSignUpModal();
      })
      .catch(err => {
        console.log(err.response);
        if (
          err.response &&
          err.response.status &&
          err.response.status === 409
        ) {
          alert(err.response.data.message);
        } else {
          console.log(err.response);
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
        localStorage.username = username;
        this.toggleLoginModal();
        this.setState({
          userId: response.data.user._id,
          username: response.data.user.username,
          profilePic: response.data.user.profilePic,
          currentCity: response.data.user.currentCity,
          email: response.data.user.email,
          loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401 && err.response.data.message) {
          alert(err.response.data.message);
        }
      });
    navigate(`/profile/${username}`);
  };

  handleLogOut = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      currentCity: "",
      profilePic: "",
      loggedIn: false
    });
    localStorage.clear();
    navigate(`/`);
  };

  imageUpload = e => {
    console.log("uploading image");
    this.setState({
      profilePic: e.target.files[0]
    });
  };

  imageUploadPost = e => {
    console.log("uploading image");
    this.setState({
      profilePic: e.target.files[0]
    });
  };

  componentDidMount() {
    this.checkForLogin();
  }
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
          imageUpload={this.imageUpload}
          impageUploadPost={this.imageUploadPost}
          togglePostModal={this.togglePostModal}
          postModalStyle={this.state.postModalStyle}
        />
        <Router>
          <HomeContainer
            path="/"
            loggedIn={this.state.loggedIn}
            currentCity={this.state.currentCity}
            togglePostModal={this.togglePostModal}
            handleCreatePost={this.handleCreatePost}
            postModalStyle={this.state.postModalStyle}
          />
          <ProfileContainer
            loggedIn={this.state.loggedIn}
            username={this.state.username}
            profilePic={this.state.profilePic}
            userId={this.state.userId}
            toggleSignUpModal={this.toggleSignUpModal}
            path="/profile/:username"
          />
        </Router>
      </div>
    );
  }
}

export default App;
