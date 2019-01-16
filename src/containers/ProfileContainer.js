import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";
const constants = require("../config/constants");

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      postGet: true,
      axiosPost: true,
      userObject: "",
      userGet: true
    };
  }

  componentDidUpdate() {
    this.getPostandUser()
  }
  componentDidMount() {
    this.getPostandUser()
  }

  getPostandUser = () =>{
    if (this.props.userId !== false && (this.state.postGet === true ||this.state.posts === "")) {
      axios
        .get(`${constants.server}/post/user/${this.props.userId}`)
        .then(response => {
          console.log("Username Response", response);
          this.setState({
            posts: response.data,
            postGet: false
          });
          console.log(response.data);
        })
        console.log("componentDidUpdate", this.props.userId);
        console.log("componentDidUpdate", this.props.username);
    }

    if (this.props.username !== false && this.state.userObject === "") {

      axios
        .get(`${constants.server}/user/${this.props.username}`)
        .then(response => {
          console.log("Username Response", response);
          this.setState({
            userObject: response.data,
            userGet: false
          });
          console.log(this.state.userObject.user.profilePic);
        })
        console.log("componentDidUpdate", this.props.username);
    }
  }
  
  render() {
    let userProfile;
    let userPost;

    if ( this.state.userObject !== "" )
    {
      let date = new Date(this.state.userObject.user.joinDate)
      let joinDate = (date.getMonth()+1)+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
      userProfile = (
        <div className="userWrapper">
          <div className="image-container user-image-container">
            <img
              src={`${constants.server}/${
                this.state.userObject.user.profilePic
              }`}
              alt={this.state.userObject.user.username}
              className="user-image"
            />
          </div>
          <div className = "userDetails">
            <ul>
              <li>My Username Is: {this.state.userObject.user.username}</li>
              <li>Current City: {this.state.userObject.user.currentCity}</li>
              <li>Joined Wayfarer: {joinDate}</li>
              <li>Email: {this.state.userObject.user.email}</li>
              <li>About me: {this.state.userObject.user.about}</li>
            </ul>
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
        <div className="userFields">
        <h1>Welcome {this.props.username}</h1>
        {userProfile}
        </div>
        <div className="postsByUser">
        {userPost}
        </div>
      </div>
    );
  }
}
export default ProfileContainer;
