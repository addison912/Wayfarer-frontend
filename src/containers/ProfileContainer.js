import React, { Component } from "react";

class ProfileContainer extends Component {
  render() {
    return (
      <div className="ProfileContainer">
        <h1>Welcome {this.props.username}!</h1>
      </div>
    );
  }
}

export default ProfileContainer;
