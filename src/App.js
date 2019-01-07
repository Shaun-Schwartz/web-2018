import React, { Component } from 'react';
import './App.css';

import Cookies from './components/cookies'
import Enter from './components/enter'
import Subscribe from './components/subscribe'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Enter />
        <Subscribe />
        <Cookies />
      </div>
    );
  }
}

export default App;
