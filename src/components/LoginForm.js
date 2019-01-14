import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <form className="modal" id="loginForm">
          <input
            type="text"
            name="username"
            placeholder="username"
            id="login-username"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            id="login-password"
          />
          <div className="formControls">
            <button onClick={this.props.toggleLoginModal}>Cancel</button>
            <input type="submit" onClick={this.props.handleLogin} />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
