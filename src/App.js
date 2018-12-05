import React, { Component } from 'react';
import { connect } from 'react-redux';
import TweetList from './Tweet/TweetList';
import { Menu } from './Tweet/Menu';

import './App.css';
const App = ({ tweets }) => {
  return (
    <>
      <Menu hasTweets={tweets.length ? true : false} />
      <TweetList tweets={tweets} />
    </>
  );
};

const mapStateToProps = state => ({ tweets: state.tweets });

export default connect(mapStateToProps)(App);
