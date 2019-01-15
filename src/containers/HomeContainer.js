import React, { Component } from "react";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import Landing from "../components/Landing";
import ProfileContainer from "./ProfileContainer";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <div className="HomeContainer">
          <Cities />
          <CityDetails />
        </div>
      );
    } else {
      return <Landing />;
    }
  }
}

export default HomeContainer;
