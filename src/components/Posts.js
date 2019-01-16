import React, { Component } from "react";
import CityPost from "./CityPost";
import axios from "axios";
const constants = require("../config/constants");

class Posts extends Component {
  state = {
    posts: [],
    displayCity: "Oakland",
    user: {}
  };

  componentDidMount() {
    axios
      .get(`${constants.server}/user/${localStorage.username}`)
      .then(user => {
        console.log("Username Response", user);
        this.setState({
          user: user.data.user
        });
      });
    axios
      .get(`${constants.server}/post/bycity/${this.state.displayCity}`, {})
      .then(posts => {
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
                profilePic={this.state.user.profilePic}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
