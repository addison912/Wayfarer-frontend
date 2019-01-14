import React, { Component } from "react";

class SignUpForm extends Component {
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <form className="modal" encType="multipart/form-data">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.props.handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.props.handleInput}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.handleInput}
          />
          <input
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
            id="profileUpload"
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
