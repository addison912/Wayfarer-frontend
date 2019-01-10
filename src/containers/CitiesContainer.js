import React, { Component } from "react";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";

class CitiesContainer extends Component {
  render() {
    return (
      <div className="CitiesContainer">
        <Cities />
        <CityDetails />
      </div>
    );
  }
}

export default CitiesContainer;
