import React, { Component } from "react";
import CitiesContainer from "../containers/CitiesContainer";
import Landing from "../components/Landing";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <div className="HomeContainer">
          <CitiesContainer currentCity={this.props.currentCity} />
        </div>
      );
    } else {
      return <Landing />;
    }
  }
}

export default HomeContainer;
