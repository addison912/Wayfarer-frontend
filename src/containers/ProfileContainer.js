import React, { Component } from "react";
import axios from "axios";
import Post from "../components/Post";
const constants = require("../config/constants");



class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        postGet: true,
        axiosPost: true,
        userObject: "",
        userGet: true
      }
  }  

    componentDidUpdate() { 
      if (this.props.userId != false && this.state.postGet === true) {
      console.log('componentDidUpdate',this.props.userId)
  
      axios.get(`${constants.server}/post/${this.props.userId}`)
              .then(response => {
                console.log("UserId Response", response)
                this.setState({
                  posts: response.data,
                  postGet: false
                })
                console.log(response.data)
              })
            }
      
      if (this.props.username != false && this.state.userGet === true ) {
              console.log('componentDidUpdate',this.props.username)
          
              axios.get(`${constants.server}/user/${this.props.username}`)
                      .then(response => {
                        console.log("Username Response", response)
                        this.setState({
                          userObject: response.data,
                          userGet: false
                        })
                        console.log(this.state.userObject.user.profilePic)
                        
                      })
                    }
                  }
  
    render() {

    let userProfile;
    let userPost;
       if (this.state.userGet != true) {
      userProfile = 
        <div>
          <img src={`${constants.server}/${this.state.userObject.user.profilePic}`} alt={this.state.userObject.user.username} className='user-image' />
        <p>This is my Username:{this.state.userObject.user.username}</p>
        <p>This is my User Id: {this.state.userObject.user._id}</p>
        <p>This is my Current City: {this.state.userObject.user.currentCity}</p>
        <p>This is my about me: {this.state.userObject.user.about}</p>
        <p>This is the date I joined: {this.state.userObject.user.joinDate}</p>
        <p>This is my email: {this.state.userObject.user.email}</p>
        </div>

        if (this.state.postGet != true) {
        userPost =
        this.state.posts.result.map(post =>{
        return(
          <div key={post._id}>
          <Post info={post} send={true} />
          </div>  
  )})
}
}
    
    return (
      <div className="ProfileContainer">
        <p>Profile Container</p>
        <h1>Welcome {this.props.username}</h1>
        {userProfile}
        <div className="listPosts">
        {userPost}
        </div>
      </div>
    )
    }
  }
  
      

export default ProfileContainer;
