import React, { Component } from "react";
import { Link } from "@reach/router";

class TopNav extends Component {
  render() {
    if (this.props.loggedIn === true) {
      return (
        <nav className="top-nav">
          <a href="#" onClick={this.props.handleLogOut}>
            <p>Log Out</p>
          </a>
          <Link to={`/profile/${this.props.username}`}>
            <p>Profile</p>
          </Link>
        </nav>
      );
    } else {
      return (
        <nav className="top-nav">
          <a href="#" onClick={this.props.toggleLoginModal}>
            <p>Login</p>
          </a>
          <a href="#" onClick={this.props.toggleSignUpModal}>
            <p>Sign Up</p>
          </a>
        </nav>
      );
    }
  }
}

export default TopNav;
