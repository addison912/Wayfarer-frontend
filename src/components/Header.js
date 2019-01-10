import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="brand">
          <img src="./assets/images/wwf.gif" />
          <h1>Wayfarer</h1>
        </div>
        <nav>
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </nav>
      </header>
    );
  }
}

export default Header;
