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
      cities: [],
      displayCity: false
    };
  }

  componentDidMount() {
    if (this.props.currentCity) {
      this.setState({ displayCity: this.props.currentCity });
    }
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
          displayedCity={this.state.displayCity}
          cities={this.state.cities}
          togglePostModal={this.props.togglePostModal}
          handleCreatePost={this.props.handleCreatePost}
          postModalStyle={this.props.postModalStyle}
        />
      </div>
    );
  }
}

export default CitiesContainer;
