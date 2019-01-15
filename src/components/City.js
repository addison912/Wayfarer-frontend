import React, { Component } from "react";

class City extends Component {
  render() {
    const { image, city } = this.props;
    return (
      <div className="City shadow-box">
        <img className="city-list-image" src={image} alt="city" />
        <h2>{city}</h2>
      </div>
    );
  }
}

export default City;
