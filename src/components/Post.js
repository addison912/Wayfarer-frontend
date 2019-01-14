import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="Post shadow-box">
        <img
          className="post-list-image"
          src="http://placecorgi.com/180"
          alt="city"
        />
        <article className="post-body">
          <h3>Post Title</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <h4>Author Name</h4>
        </article>
      </div>
    );
  }
}

export default Post;
