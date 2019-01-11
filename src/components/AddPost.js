import React, { Component } from "react";
import PostForm from "./PostForm";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: { display: "none" }
    };
  }

  toggleModal = () =>
    this.state.formStyle.display === "none"
      ? this.setState({
          formStyle: { display: "flex" }
        })
      : this.setState({
          formStyle: { display: "none" }
        });

  render() {
    return (
      <div className="AddPost">
        <img
          onClick={this.toggleModal}
          id="add-post-icon"
          src="./assets/images/plus.svg"
          alt="add post button"
        />
        <PostForm style={this.state.formStyle} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default AddPost;
