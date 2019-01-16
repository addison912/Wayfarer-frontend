import React, { Component } from "react";
const constants = require("../config/constants");

class CityPost extends Component {
  render() {
    const { title, body, author, profilePic } = this.props;
    return (
      <div className="Post-Container">
        <div className="Post shadow-box">
          <div className="image-container city-post-image-container">
            <img
              className="city-post-image"
              src={`${constants.server}/${profilePic}`}
              alt="city"
            />
          </div>
          <article className="post-body">
            <h3>{title}</h3>
            <p>{body}</p>
            <h4>{author}</h4>
          </article>
        </div>
      </div>
    );
  }
}

export default CityPost;
