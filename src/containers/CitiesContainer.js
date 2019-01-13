import React, { Component } from "react";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import Landing from "../components/Landing";

class CitiesContainer extends Component {
  render() {
    return (
      <div className="CitiesContainer">
        <Landing />
        {/* <Cities />
        <CityDetails /> */}
      </div>
    );
  }
}

export default CitiesContainer;
