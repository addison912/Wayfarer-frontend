import React, { Component } from "react";

class ProfileEdit extends Component {
  render() {
    return (
      <div className="modal-container" style={this.props.profileEditModalStyle}>
        <form className="modal" encType="multipart/form-data">
          <input
            id="edit-username"
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            id="edit-password"
            type="password"
            name="password"
            placeholder="password"
          />
          <input id="edit-email" type="text" name="email" placeholder="email" />
          <input
            id="edit-currentCity"
            type="text"
            name="currentCity"
            placeholder="Current City"
          />
          <br />
          <label htmlFor="profileUpload">Upload a profile picture:</label>
          <input
            type="file"
            accept="image/*"
            name="profilePic"
            id="signup-profilePic"
            onChange={this.props.imageUpload}
          />
          <div className="formControls">
            <button onClick={this.props.toggleProfileEditModal}>Cancel</button>
            <input type="submit" onClick={this.props.handleProfileEdit} />
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
