import React, { Component } from "react";
import City from "./City";

class Cities extends Component {
  render() {
    return (
      <div className="Cities">
        <h1>Cities</h1>
        <div className="city-list">
          <City />
        </div>
      </div>
    );
  }
}

export default Cities;
