import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FadeIn from 'react-fade-in';

import Subscribe from './components/subscribe'
import Enter from './components/enter'
import Cookies from './components/cookies'

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
