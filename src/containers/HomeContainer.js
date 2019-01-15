import React, { Component } from "react";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import Landing from "../components/Landing";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      displayedCity: {}
    };
  }

  componentDidMount() {
    this.setState({ displayedCity: this.props.currentCity });
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <div className="HomeContainer">
          <Cities />
          <CityDetails
            displayedCity={this.state.displayedCity}
            currentCity={this.props.currentCity}
          />
        </div>
      );
    } else {
      return <Landing />;
    }
  }
}

export default HomeContainer;
