import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <div id="post-form" className="modal">
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={this.props.handleInput}
            id="post-title"
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={this.props.currentCity}
            onChange={this.props.handleInput}
            id="post-city"
          />
          <textarea
            type="text"
            name="body"
            placeholder="body"
            onChange={this.props.handleInput}
            id="post-body"
          />

          <label htmlFor="post-pic">Upload an image:</label>
          <input
            type="file"
            accept="image/*"
            name="picture"
            id="post-pic"
            onChange={this.props.handleInput}
          />
          <div className="formControls">
            <button onClick={this.props.togglePostModal}>Cancel</button>
            <button onClick={this.props.handleCreatePost}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;

// handleCreatePost = e => {
//   e.preventDefault();
//   let postDate = new Date();
//   let newPost = new FormData();
//   newPost.append("username", localStorage.username);
//   newPost.append("title", document.getElementById("post-title").value);
//   newPost.append("picture", this.state.postPic);
//   newPost.append("city", document.getElementById("post-city").value);
//   newPost.append("body", document.getElementById("post-body").value);
//   newPost.append("date", postDate);
//   this.togglePostModal();
//   axios({
//     method: "POST",
//     url: `${constants.server}/post/create`,
//     data: newPost,
//     config: {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       }
//     }
//   })
//     .then(response => {
//       console.log("created post ", response);
//     })
//     .catch(err => {
//       console.log(err.response);
//     });
// };
