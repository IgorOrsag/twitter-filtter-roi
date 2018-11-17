import React, { Component } from 'react';
import { TweetList } from './Tweet/TweetList';
import { Menu } from './Tweet/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header" /> */}
        <Menu />
        <TweetList />
      </div>
    );
  }
}

export default App;
