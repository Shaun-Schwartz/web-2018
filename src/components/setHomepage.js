import React, { Component } from 'react';
import DownloadApp from './downloadApp';

class SetHomepage extends Component {
  constructor() {
    super();
    this.state = {showSetHomepage: true, showDownloadApp: false};
  }

  close = () => {
    this.setState({showSetHomepage: false, showDownloadApp: true})
  }

  render() {
    if (this.props.show && this.state.showSetHomepage) {
      return (
        <div className="set-homepage">
          <div className="set-homepage-text">
            <h3>Are you sure you want to change your homepage?</h3>
          </div>
          <div className="set-homepage-buttons">
            <button
              onClick={this.close}
                className="set-homepage-button">
                Cancel
              </button>
            <button
              onClick={this.close}
              className="set-homepage-button">
              Confirm
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <DownloadApp show={this.state.showDownloadApp} />
      )
    }
  }
}

export default SetHomepage;
