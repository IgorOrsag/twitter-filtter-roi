import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { TwitterItem } from './TwitterItem';

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

export default TweetList;
