import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TweetList from './Tweet/TweetList';
import { Menu } from './Tweet/Menu';
import configureStore from './store';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header" /> */}
        <Provider store={store}>
          <>
            <Menu />
            <TweetList />
          </>
        </Provider>
      </div>
    );
  }
}

export default App;
