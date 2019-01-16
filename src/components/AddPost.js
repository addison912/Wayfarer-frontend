import React, { Component } from "react";
import PostForm from "./PostForm";

class AddPost extends Component {
  render() {
    return (
      <div className="AddPost">
        <div
          className="plus-icon shadow"
          onClick={this.props.togglePostModal}
          id="add-post-icon"
          src="./assets/images/plus.svg"
          alt="add post button"
        >
          <h1>+</h1>
        </div>
        <PostForm
          style={this.props.postModalStyle}
          toggleModal={this.toggleModal}
          currentCity={this.props.displayCity}
          ciities={this.props.cities}
          togglePostModal={this.props.togglePostModal}
          handleCreatePost={this.props.handleCreatePost}
          handleInput={this.props.handleInput}
        />
      </div>
    );
  }
}

export default AddPost;
