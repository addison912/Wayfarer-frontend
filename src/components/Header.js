import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { Link } from "@reach/router";
import TopNav from "./TopNav";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="Header shadow">
          <Link to="/" className="brand">
            <img src="./assets/images/wwf.gif" alt="Wayfarer logo" />
            <h1>Wayfarer</h1>
          </Link>
          <TopNav
            loggedIn={this.props.loggedIn}
            username={this.props.username}
            toggleSignUpModal={this.props.toggleSignUpModal}
            toggleLoginModal={this.props.toggleLoginModal}
            handleLogOut={this.props.handleLogOut}
          />
        </header>
        <SignUpForm
          style={this.props.signUpModalStyle}
          toggleSignUpModal={this.props.toggleSignUpModal}
          loggedIn={this.props.loggedIn}
          handleInput={this.props.handleInput}
          handleSignUp={this.props.handleSignUp}
        />
        <LoginForm
          style={this.props.loginModalStyle}
          toggleLoginModal={this.props.toggleLoginModal}
          handleLogin={this.props.handleLogin}
        />
      </div>
    );
  }
}

export default Header;
