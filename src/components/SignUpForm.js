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
            onChange={this.props.handleInput}
          />
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="password"
            onChange={this.props.handleInput}
          />
          <input
            id="signup-email"
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.handleInput}
          />
          <input
            id="signup-currentCity"
            type="text"
            name="currentCity"
            placeholder="Current City"
            onChange={this.props.handleInput}
          />
          <br />
          <label htmlFor="profileUpload">Upload a profile picture:</label>
          <input
            type="file"
            accept="image/*"
            name="profilePic"
            id="signup-profilePic"
            onChange={this.props.handleInput}
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
