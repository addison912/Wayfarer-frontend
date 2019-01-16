import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";
import AddPost from "./AddPost";

class CityDetails extends Component {
  render() {
    return (
      <div className="CityDetails">
        <CityInfo displayCity={this.props.displayCity} />
        <AddPost
          displayCity={this.props.displayCity}
          cities={this.props.cities}
          togglePostModal={this.props.togglePostModal}
          handleCreatePost={this.props.handleCreatePost}
          postModalStyle={this.props.postModalStyle}
        />
        <Posts displayCity={this.props.displayCity} />
      </div>
    );
  }
}

export default CityDetails;
