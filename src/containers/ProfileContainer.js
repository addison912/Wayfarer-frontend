import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";
import ProfileEdit from "../components/ProfileEdit";
const constants = require("../config/constants");

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      postGet: true,
      axiosPost: true,
      userObject: "",
      userGet: true,
      profileEditModalStyle: { display: "none" }
    };
  }

  toggleProfileEditModal = () =>
    this.state.profileEditModalStyle.display === "none"
      ? this.setState({
          profileEditModalStyle: { display: "flex" }
        })
      : this.setState({
          profileEditModalStyle: { display: "none" }
        });

  componentDidMount() {
    this.getPostandUser();
  }

  getPostandUser = () => {
    if (this.props.username !== false && this.state.userObject === "") {
      axios
        .get(`${constants.server}/user/${this.props.username}`)
        .then(user => {
          this.setState({
            userObject: user.data,
            userGet: false
          });
          axios
            .get(`${constants.server}/post/user/${user.data.user._id}`)
            .then(posts => {
              this.setState({
                posts: posts.data,
                postGet: false
              });
            });
        });
      console.log("componentDidUpdate", this.props.username);
    }
  };

  render() {
    let userProfile;
    let userPost;
    if (this.state.userObject !== "") {
      let date = new Date(this.state.userObject.user.joinDate);
      let joinDate =
        date.getMonth() +
        1 +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear();
      userProfile = (
        <div className="userWrapper shadow-box">
          <div className="image-container user-image-container shadow-box">
            <img
              src={`${constants.server}/${
                this.state.userObject.user.profilePic
              }`}
              alt={this.state.userObject.user.username}
              className="user-image"
            />
          </div>
          <div className="userDetails ">
            <ul>
              <li>
                <strong>Username:</strong> {this.state.userObject.user.username}
              </li>
              <li>
                <strong>Current City:</strong>{" "}
                {this.state.userObject.user.currentCity}
              </li>
              <li>
                <strong>Joined Wayfarer:</strong> {joinDate}
              </li>
              <li>
                <strong>Email:</strong> {this.state.userObject.user.email}
              </li>
              <li>
                <strong>About me:</strong> {this.state.userObject.user.about}
              </li>
            </ul>
            <button onClick={this.toggleProfileEditModal}>Edit Profile</button>
          </div>
        </div>
      );
      if (this.state.posts !== "") {
        userPost = this.state.posts.result.map(post => {
          return (
            <div key={post._id}>
              <Post info={post} send={true} />
            </div>
          );
        });
      }
    }
    return (
      <div className="ProfileContainer">
        <div className="userFields">{userProfile}</div>
        <div className="postsByUser">{userPost}</div>
        <ProfileEdit
          profileEditModalStyle={this.state.profileEditModalStyle}
          toggleProfileEditModal={this.toggleProfileEditModal}
          imageUpload={this.props.imageUpload}
          handleProfileEdit={this.props.handleProfileEdit}
        />
      </div>
    );
  }
}
export default ProfileContainer;
