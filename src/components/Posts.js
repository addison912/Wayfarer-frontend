import React, { Component } from "react";
import CityPost from "./CityPost";
import axios from "axios";
const constants = require("../config/constants");

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        <div className="post-list">
          {this.props.posts.reverse().map(post => {
            return (
              <CityPost
                key={post._id}
                title={post.title}
                body={post.body}
                user={post.user}
                comments={post.comments}
                id={post}
                profilePic={this.props.user.profilePic}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
