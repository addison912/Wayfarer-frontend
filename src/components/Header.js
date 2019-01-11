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
        <header className="Header shadow">
          <a href="/" className="brand">
            <img src="./assets/images/wwf.gif" />
            <h1>Wayfarer</h1>
          </a>
          <nav className="top-nav">
            <a href="#" onClick={this.toggleLoginModal}>
              <p>Login</p>
            </a>
            <a href="#" onClick={this.toggleSignUpModal}>
              <p>Sign Up</p>
            </a>
            <a href="/profile/1">
              <p>Profile</p>
            </a>
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
