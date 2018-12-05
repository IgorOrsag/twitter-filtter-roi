import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Stats } from './Stats';
import { TwitterItem } from './TwitterItem';
import getFilteredTweets from './../Filter';
import { getParams } from './../Utils/router';
import { getStats } from './../Utils/stats';
import { toggleStats } from './../Actions/Tweets';

const TweetList = ({ tweets, showStats, toggleStats, stats }) => {
  console.log(stats);
  return (
    <>
      <Stats
        {...stats}
        show={showStats}
        handleHide={() => toggleStats(false)}
      />
      <ListGroup>
        {tweets.map(tweet => (
          <ListGroupItem key={tweet.id}>
            <TwitterItem {...tweet} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

const mapStateToProps = (state, { location: { search } }) => {
  const tweets = getFilteredTweets(state, {
    filter: getParams(search, 'filter')
  });
  return {
    showStats: state.toggleStats,
    tweets,
    stats: getStats(tweets)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleStats }
  )(TweetList)
);
