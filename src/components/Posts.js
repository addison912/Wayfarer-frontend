import React, { Component } from "react";
import CityPost from "./CityPost";
import axios from "axios";
const constants = require("../config/constants");

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidUpdate() {
    axios.get(`${constants.server}/post/bycity/Oakland`, {}).then(posts => {
      if (posts.data) {
        if (Array.isArray(posts.data.posts)) {
          posts = posts.data.posts;
        } else {
          posts = [posts.data];
        }
      } else {
        posts = [];
      }
      console.log(posts);
      this.setState({
        posts
      });
    });
  }
  render() {
    return (
      <div className="Posts">
        <div className="post-list">
          {this.state.posts.map(post => {
            return (
              <CityPost
                key={post._id}
                title={post.title}
                body={post.body}
                user={post.user}
                comments={post.comments}
                id={post}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
