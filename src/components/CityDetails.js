import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";
import AddPost from "./AddPost";
import axios from "axios";
const constants = require("../config/constants");

class CityDetails extends Component {
  render() {
    return (
      <div className="CityDetails">
        <CityInfo displayCity={this.props.displayCity} />
        <AddPost displayCity={this.props.displayCity} />
        <Posts displayCity={this.props.displayCity} />
      </div>
    );
  }
}

export default CityDetails;
