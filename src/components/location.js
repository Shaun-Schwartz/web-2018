import React, { Component } from 'react';

class Cookies extends Component {
  constructor() {
    super();
    this.state = {showLocation: true, showSocialMedia: false};
  }

  closeLocation = () => {
    this.setState({showLocation: false, showSocialMedia: true})
  }

  render() {
    if (this.props.show && this.state.showLocation) {
      return (
        <div className="location">
          <div className="location-text">
            <h3>This website wants to:</h3>
            <br/>
            <img className="location-icon" src="location.png"/>Know your location
          </div>
          <div className="location-buttons">
            <button
              onClick={this.closeLocation}
                className="location-button">
                Allow
              </button>
            <button
              onClick={this.closeLocation}
              className="location-button">
              Block
            </button>
          </div>
        </div>
      );
    } else {
      return (
        null
      )
    }
  }
}

export default Cookies;
