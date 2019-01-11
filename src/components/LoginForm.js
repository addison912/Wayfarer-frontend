import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ""
    };
  }
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <div className="modal">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <div className="formControls">
            <button onClick={this.props.toggleLoginModal}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
