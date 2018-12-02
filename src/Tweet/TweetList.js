import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { TwitterItem } from './TwitterItem';
import getFilteredTweets from './../Filter';
import { getParams } from './../Utils/router';

const TweetList = ({ tweets }) => {
  return (
    <ListGroup>
      {tweets.map(tweet => (
        <ListGroupItem key={tweet.id}>
          <TwitterItem {...tweet} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state, { location: { search } }) => {
  return {
    tweets: getFilteredTweets(state, {
      filter: getParams(search, 'filter')
    })
  };
};

export default withRouter(connect(mapStateToProps)(TweetList));
