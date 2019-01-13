import React, { Component } from "react";
import axios from "axios";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: ""
    };
  }

  handleSignUp = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <form className="modal" encType="multipart/form-data">
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="currentCity" placeholder="Current City" />
          <br />
          <label htmlFor="profileUpload">Upload a profile picture:</label>
          <input type="file" name="profilePic" id="profileUpload" />
          <div className="formControls">
            <button onClick={this.props.toggleSignUpModal}>Cancel</button>
            <input type="submit" onClick={this.handleSignUp} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
