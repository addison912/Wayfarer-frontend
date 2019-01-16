import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";
import AddPost from "./AddPost";
import axios from "axios";
const constants = require("../config/constants");

class CityDetails extends Component {
  state = {
    title: "",
    city: "",
    body: "",
    picture: "",
    posts: [],
    displayCity: "Oakland",
    user: {}
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreatePost = e => {
    e.preventDefault();
    console.log("submitted post");
    let username = localStorage.username;
    let newPost = {};
    let { title, city, body, picture } = this.state;
    newPost.title = title;
    newPost.city = city;
    newPost.body = body;
    newPost.picture = picture;
    newPost.username = username;
    axios
      .post(`${constants.server}/post/create`, newPost)
      .then(response => {
        console.log("posted");
        console.log(response);
        this.props.togglePostModal();
        this.getPosts();
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  getPosts = () => {
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
        this.setState({
          posts
        });
      });
  };

  ////

  componentDidMount() {
    this.getPosts();
  }
  /////

  render() {
    return (
      <div className="CityDetails">
        <CityInfo displayCity={this.props.displayCity} />
        <AddPost
          displayCity={this.props.displayCity}
          cities={this.props.cities}
          togglePostModal={this.props.togglePostModal}
          handleCreatePost={this.handleCreatePost}
          postModalStyle={this.props.postModalStyle}
          updatePosts={this.state.updatePosts}
          handleInput={this.handleInput}
        />
        <Posts
          displayCity={this.props.displayCity}
          user={this.state.user}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default CityDetails;
