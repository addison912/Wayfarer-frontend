import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }
  render() {
    return (
      <div className="modal-container" style={this.props.style}>
        <div id="post-form" className="modal">
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="city" placeholder="city" />
          <textarea type="text" name="body" placeholder="body" />
          <div className="formControls">
            <button onClick={this.props.toggleModal}>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
