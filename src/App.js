import React from 'react';

import TweetList from './Tweet/TweetList';
import Menu from './Tweet/Menu';
import ErrorAlert from './Tweet/ErrorAlert';

import './App.css';
const App = () => {
  return (
    <div>
      <ErrorAlert />
      <Menu />
      <TweetList />
    </div>
  );
};

export default App;
