import React, { Component } from "react";
import axios from "axios";
const constants = require("../config/constants");

class CityInfo extends Component {
  state = {
    city: "",
    state: "",
    country: "",
    image: "/assets/images/Loadin_icon.gif"
  };

  componentDidMount() {
    // if (this.props.currentCity) {
    //   this.setState({ displayCity: this.props.currentCity });
    // }
    axios.get(`${constants.server}/city/index`, {}).then(cities => {
      this.setState({
        city: cities.data[0].city,
        state: cities.data[0].state,
        country: cities.data[0].country,
        image: cities.data[0].image
      });
    });
  }

  render() {
    let { city, state, country, image } = this.state;
    return (
      <div className="CityInfo shadow-box">
        <div className="city-headers">
          <h2>{city}</h2>
          <h3>{country}</h3>
          <h3>{state}</h3>
        </div>
        <div className="image-container city-image-container">
          <img className="city-info-image" src={image} alt="city" />
        </div>
      </div>
    );
  }
}

export default CityInfo;
