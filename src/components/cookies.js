import React, { Component } from 'react';

class Cookies extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.show) {
      return (
        <div className="cookies">
          <div className="cookies-header">
            <div className="cookies-title">
              This site uses cookies
            </div>
            <div className="cookies-close">
              <button>close</button>
            </div>
          </div>
          <div className="cookies-small">
          We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Cookies;
