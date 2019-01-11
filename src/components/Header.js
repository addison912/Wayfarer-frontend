import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpModalStyle: { display: "none" },
      loginModalStyle: { display: "none" }
    };
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

  toggleLoginModal = () => {
    this.state.loginModalStyle.display === "none"
      ? this.setState({
          loginModalStyle: { display: "flex" }
        })
      : this.setState({
          loginModalStyle: { display: "none" }
        });
  };

  render() {
    return (
      <div>
        <header className="Header">
          <div className="brand">
            <img src="./assets/images/wwf.gif" />
            <h1>Wayfarer</h1>
          </div>
          <nav>
            <a href="#" onClick={this.toggleLoginModal}>
              Login
            </a>
            <a href="#" onClick={this.toggleSignUpModal}>
              Sign Up
            </a>
            <a href="/profile/1">Profile</a>
          </nav>
        </header>
        <SignUpForm
          style={this.state.signUpModalStyle}
          toggleSignUpModal={this.toggleSignUpModal}
        />
        <LoginForm
          style={this.state.loginModalStyle}
          toggleLoginModal={this.toggleLoginModal}
        />
      </div>
    );
  }
}

export default Header;
