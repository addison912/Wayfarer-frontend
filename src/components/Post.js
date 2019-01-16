import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props)
    this.state ={
      post: this.props.info,
      postUpdated: this.props.send
    }
  }



  




  render() {
  
    console.log(this.state.post);
    let showPost ;
    if (this.state.postUpdated === true) {
      showPost =
        <div className="Post shadow-box">
        <img
          className="post-list-image"
          src="http://placecorgi.com/180"
          alt="city"
        />
        <article className="post-body">
          <h3>{this.state.post.title}</h3>
          <p>
            {this.state.post.body}
          </p>
          <h4>{this.state.post.author}</h4>
        </article>
      </div>
      }
    
  
  
    return (

      <div className="Post-Container">
      {showPost}
      </div>
    );
  
} 
}

export default Post;
