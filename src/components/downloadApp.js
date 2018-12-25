import React, { Component } from 'react';

class DownloadApp extends Component {
  constructor() {
    super();
    this.state = {showDownloadApp: true, NEXTCOMPONENT: false};
  }

  close = () => {
    this.setState({showDownloadApp: false, NEXTCOMPONENT: true})
  }

  render() {
    if (this.props.show && this.state.showDownloadApp) {
      return (
        <div className="cookies">
          <div className="cookies-header">
            <div className="cookies-title">
              <h2>Download our app for the best experience</h2>
            </div>
            <div className="cookies-close">
              <button onClick={this.close}>close</button>
            </div>
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

export default DownloadApp;
