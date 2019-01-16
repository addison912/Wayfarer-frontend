import React, { Component } from "react";
import PostForm from "./PostForm";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostForm: { display: "none" }
    };
  }

  toggleModal = () =>
    this.state.PostForm.display === "none"
      ? this.setState({
          PostForm: { display: "flex" }
        })
      : this.setState({
          PostForm: { display: "none" }
        });

  render() {
    return (
      <div className="AddPost">
        <div
          className="plus-icon shadow"
          onClick={this.toggleModal}
          id="add-post-icon"
          src="./assets/images/plus.svg"
          alt="add post button"
        >
          <h1>+</h1>
        </div>
        <PostForm
          style={this.state.PostForm}
          toggleModal={this.toggleModal}
          currentCity={this.props.displayCity}
          ciities={this.props.cities}
        />
      </div>
    );
  }
}

export default AddPost;
