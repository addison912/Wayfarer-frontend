import React, { Component } from "react";
import axios from 'axios';
import Posts from '../components/Posts'


class ProfileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        posts: []
      }
  }  

    // componentDidMount () {
    //   axios.get(`http://localhost:3001/posts/${this.state.userId}`)
    //           .then(response => {
    //             this.setState({
    //               posts: response.data
    //             })
    //           })


    render() 
    {
      // let posts = this.state.posts.map((posts, i) => {
      //   return (
      //     <div key={i}>
      //       <Posts info={posts} isLoggedIn={this.state.isLoggedIn}
      //       />
      //     </div>
      //   )
      // })

    return (
      <div className="ProfileContainer">
      <p>Profile Container</p>
        {/* <h1>Welcome {this.props.username}</h1>
        <img src={this.state.user.profilePic} alt={this.state.user.username} className='dog-image' />
        <p>{this.state.user.username}</p>
        <p>{this.state.user.currentCity}</p>
        <p>{this.state.user.about}</p>
        <p>{this.state.user.joinDate}</p>
        <p>{this.state.user.email}</p>
        <div className="listPosts">
        {posts} */}
      </div>
  
    );
  }
}

export default ProfileContainer;
