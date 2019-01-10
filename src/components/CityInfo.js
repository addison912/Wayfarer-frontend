import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return (
      <div className="CityInfo">
        <div className="city-headers">
          <h2>City Name</h2>
          <h3>Country</h3>
          <h3>State/Province</h3>
        </div>
        <img className="city-info-image" src="http://placecorgi.com/500/300" />
      </div>
    );
  }
}

export default CityInfo;
