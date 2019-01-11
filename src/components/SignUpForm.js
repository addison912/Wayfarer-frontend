import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: ""
    };
  }
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <div className="modal">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="currentCity" placeholder="Current City" />
          <div className="formControls">
            <button onClick={this.props.toggleSignUpModal}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
