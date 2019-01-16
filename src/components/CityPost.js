import React, { Component } from "react";

class CityPost extends Component {
  render() {
    const { title, body, author } = this.props;
    return (
      <div className="Post-Container">
        <div className="Post shadow-box">
          <img
            className="post-list-image"
            src="http://placecorgi.com/180"
            alt="city"
          />
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
