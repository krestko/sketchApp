import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ReactiveBase app='State App' credentials='y-yD19rg0tgUDPkKzCIQexnFrwJKsgru'>
          <HomePage />
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
