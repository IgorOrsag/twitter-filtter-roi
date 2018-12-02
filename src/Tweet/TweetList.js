import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { TwitterItem } from './TwitterItem';
import getFilteredTweets from './../Filter';
import { getParams } from './../Utils/router';

// import { FILTER_OPERATORS } from './../Filter/operators';

const TweetList = ({ tweets }) => {
  // console.log(JSON.stringify(tweets));
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

// const filter = {
//   date: { operator: FILTER_OPERATORS.LESS, value: Date.now() },
//   like: { operator: FILTER_OPERATORS.LESS, value: 1000 }
// };

const mapStateToProps = (state, { location: { search } }) => {
  return {
    tweets: getFilteredTweets(state, {
      filter: getParams(search, 'filter')
    })
  };
};

export default withRouter(connect(mapStateToProps)(TweetList));
