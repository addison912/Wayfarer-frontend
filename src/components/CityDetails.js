import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";

class CityDetails extends Component {
  render() {
    return (
      <div className="CityDetails">
        <CityInfo />
        <Posts />
      </div>
    );
  }
}

export default CityDetails;
