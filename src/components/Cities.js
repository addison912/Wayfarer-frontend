import React, { Component } from "react";
import City from "./City";

class Cities extends Component {
  render() {
    return (
      <div className="Cities">
        <div className="city-list">
          {this.props.cities.map(city => {
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
