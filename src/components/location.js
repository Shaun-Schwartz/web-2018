import React, { Component } from 'react';
import SetHomepage from './setHomepage'

class Location extends Component {
  constructor() {
    super();
    this.state = {showLocation: true, showSetHomepage: false};
  }

  closeLocation = () => {
    this.setState({showLocation: false, showSetHomepage: true})
  }

  render() {
    if (this.props.show && this.state.showLocation) {
      return (
        <div className="alert location-alert">
          <div className="alert-text">
            <h3>This website wants to:</h3>
            <img className="location-icon" src="location.png" alt="location-icon"/>
            Know your location
          </div>
          <div className="alert-buttons">
            <button
              onClick={this.closeLocation}
                className="alert-button alert-button-left">
                Allow
              </button>
            <button
              onClick={this.closeLocation}
              className="alert-button alert-button-right">
              Block
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <SetHomepage show={this.state.showSetHomepage} />
      )
    }
  }
}

export default Location;
