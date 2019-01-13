import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
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
        <div id="post-form" className="modal">
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="city" placeholder="city" />
          <textarea type="text" name="body" placeholder="body" />
          <div className="formControls">
            <button onClick={this.props.toggleModal}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
