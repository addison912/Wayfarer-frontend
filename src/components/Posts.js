import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";
const constants = require("../config/constants");

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(`${constants.server}/post/bycity/${this.props.displayCity}`, {})
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      });
  }
  render() {
    return (
      <div className="Posts">
        <div className="post-list">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
