import React, { Component } from "react";
import CityInfo from "./CityInfo";
import Posts from "./Posts";
import AddPost from "./AddPost";

class CityDetails extends Component {
  state = {
    displayCity: {}
  };
  componentDidUpdate() {
    if (this.props.currentCity) {
      this.setState({
        displayCity: this.props.currentCity
      });
    }
  }
  render() {
    return (
      <div className="CityDetails">
        <CityInfo currentCity={this.props.currentCity} />
        <AddPost currentCity={this.props.currentCity} />
        <Posts displayCity={this.state.displayCity} />
      </div>
    );
  }
}

export default CityDetails;
