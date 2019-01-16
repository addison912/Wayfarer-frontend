import React, { Component } from "react";

class PostDetails extends Component {
    render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <form className="modal" encType="multipart/form-data">
          <input
            id="signup-username"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            id="signup-password"
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            id="signup-email"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            id="signup-currentCity"
            type="text"
            name="currentCity"
            placeholder="Current City"
          />
          <br />
          <label htmlFor="postUpload">Upload a picture:</label>
          <input
            type="file"
            accept="image/*"
            name="postModalPic"
            id="postModalPic"
            onChange={this.props.imageUploadPost}
          />
          <div className="formControls">
            <button onClick={this.props.togglePostModal} >Cancel</button>
            
          </div>
        </form>
      </div>
    );
  }
}

export default PostDetails;



