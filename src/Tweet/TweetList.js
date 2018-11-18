import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { TwitterItem } from './TwitterItem';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({ tweets: state.tweets });

export default connect(mapStateToProps)(TweetList);
