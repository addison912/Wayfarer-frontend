import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";
import AddPost from "./AddPost";

class CityDetails extends Component {
  render() {
    return (
      <div className="CityDetails">
        <CityInfo />
        <AddPost />
        <Posts />
      </div>
    );
  }
}

export default CityDetails;
