import React, { Component } from "react";

class City extends Component {
  render() {
    return (
      <div className="City shadow-box">
        <img className="city-list-image" src="http://placecorgi.com/260/180" />
        <h2>City Name</h2>
      </div>
    );
  }
}

export default City;
