import React, { Component } from "react";
import City from "./City";
import axios from "axios";
const constants = require("../config/constants");

class Cities extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    axios.get(`${constants.server}/city/index`, {}).then(cities => {
      this.setState({
        cities: cities.data
      });
    });
  }

  render() {
    return (
      <div className="Cities">
        <div className="city-list">
          {this.state.cities.map(city => {
            return (
              <City
                key={city._id}
                city={city.city}
                image={city.image}
                id={city}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cities;
