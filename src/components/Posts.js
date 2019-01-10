import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        <h1>Posts</h1>
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
