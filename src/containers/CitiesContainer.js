import React, { Component } from "react";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import axios from "axios";
const constants = require("../config/constants");

class CitiesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cities: []
    };
  }

  componentDidMount() {
    axios.get(`${constants.server}/city/index`, {}).then(cities => {
      this.setState({
        cities: cities.data
      });
    });
  }

  render() {
    return (
      <div className="CitiesContainer">
        <Cities cities={this.state.cities} />
        <CityDetails
          currentCity={this.props.currentCity}
          cities={this.state.cities}
        />
      </div>
    );
  }
}

export default CitiesContainer;
