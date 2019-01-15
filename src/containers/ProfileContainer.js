import React, { Component } from "react";
import axios from "axios";
import Posts from "../components/Posts";



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
  
      axios.get(`http://localhost:3001/post/${this.props.userId}`)
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
              console.log('componentDidUpdate',this.props.userId)
          
              axios.get(`http://localhost:3001/user/${this.props.username}`)
                      .then(response => {
                        console.log("Username Response", response)
                        this.setState({
                          userObject: response.data,
                          userGet: false
                        })
                        console.log(this.state.userObject.user.profilePic)
                        
                      })
                    }
          

          // if (this.props.userId != false && this.state.axiosPost === true ) {
            
          //   console.log('User ID did update',this.props.userId)

          //   let userID = this.props.userId
          //   console.log(userID)
          //      let post = {
          //           user: userID,
          //           title: "JSON User Post: San Francisoc Hot Spots",
          //           picture: "https://picsum.photos/200",
          //           body: "Let me count the reasons why I can't wait to go to San Francisco.  Are you ready for fun and fog?"
          //         }
          //     let data = JSON.stringify(post)

          //   // console.log("this is the post": console.log(post))
          
          //   axios.post(`http://localhost:3001/post/create`, data)
            
          //           .then(response => {
          //             console.log("Post Response", response)
          //             this.setState({
          //               postCreated: response.data,
          //               axiosPost: false
          //             })
          //           })
          //         }


                }
          //   )
              
              
                  
            
            
            

    
    
  
    render() {

    let userProfile;
    let userPost;
       if (this.state.userGet != true) {
      userProfile = 
        <div>
          <img src={this.state.userObject.user.profilePic} alt={this.state.userObject.user.username} className='user-image' />
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
        <li key={ post._id }>{post.title}</li>
  )
})
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
