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
        <div className="alert set-homepage-alert">
          <div className="alert-text">
            <h3>Are you sure you want to change your homepage?</h3>
          </div>
          <div className="alert-buttons set-homepage-alert-buttons">
            <button
              onClick={this.close}
                className="alert-button-left alert-button">
                Cancel
              </button>
            <button
              onClick={this.close}
              className="alert-button-right alert-button">
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
