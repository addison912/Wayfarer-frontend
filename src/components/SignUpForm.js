import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <form className="modal" encType="multipart/form-data">
          <input
            id="signup-username"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            id="signup-email"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            id="signup-currentCity"
            type="text"
            name="currentCity"
            placeholder="Current City"
          />
          <br />
          <label htmlFor="profileUpload">Upload a profile picture:</label>
          <input
            type="file"
            accept="image/*"
            name="profilePic"
            id="signup-profilePic"
          />
          <div className="formControls">
            <button onClick={this.props.toggleSignUpModal}>Cancel</button>
            <input type="submit" onClick={this.props.handleSignUp} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
