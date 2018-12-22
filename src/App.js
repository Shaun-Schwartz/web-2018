import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FadeIn from 'react-fade-in';

import Subscribe from './components/subscribe'
import Enter from './components/enter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Enter />
        <Subscribe />
      </div>
    );
  }
}

export default App;
