import React, { Component } from "react";
import axios from "axios";
const constants = require("../config/constants");

class CityPost extends Component {
  state = {
    profilePic: "",
    author: " "
  };
  componentDidMount() {
    axios.get(`${constants.server}/user/byid/${this.props.user}`).then(user => {
      this.setState({
        profilePic: user.data.user.profilePic,
        author: user.data.user.username
      });
    });
  }
  render() {
    const { title, body } = this.props;
    return (
      <div className="Post-Container">
        <div className="Post shadow-box">
          <div className="image-container city-post-image-container">
            <img
              className="city-post-image"
              src={`${constants.server}/${this.state.profilePic}`}
              alt="city"
            />
          </div>
          <article className="post-body">
            <div>
              <h3>{title}</h3>
              <br />
              <p>{body}</p>
            </div>
            <h4>{this.state.author}</h4>
          </article>
        </div>
      </div>
    );
  }
}

export default CityPost;
