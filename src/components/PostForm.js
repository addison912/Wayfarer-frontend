import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      city: "",
      body: "",
      picture: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postSubmit = e => {
    e.preventDefault();
    console.log("submitted post");
    let newPost;
    let { title, city, body, picture } = this.state;
    newPost.title = title;
    newPost.city = city;
    newPost.body = body;
    newPost.picture = picture;
  };

  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <div id="post-form" className="modal">
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.handleInput}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={this.handleInput}
          />
          <textarea
            type="text"
            name="body"
            placeholder="body"
            onChange={this.handleInput}
          />

          <label htmlFor="post-pic">Upload an image:</label>
          <input
            type="file"
            accept="image/*"
            name="picture"
            id="post-pic"
            onChange={this.handleInput}
          />
          <div className="formControls">
            <button onClick={this.props.toggleModal}>Cancel</button>
            <button onClick={this.postSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
