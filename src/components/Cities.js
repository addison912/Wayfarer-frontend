import React, { Component } from "react";
import City from "./City";

class Cities extends Component {
  render() {
    return (
      <div className="Cities">
        <div className="city-list">
          <City />
          <City />
          <City />
          <City />
        </div>
      </div>
    );
  }
}

export default Cities;
