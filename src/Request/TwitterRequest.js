import { ExampleResponse } from './ExampleResponse';
import Defaults from 'superagent-defaults';

const FETCHED_TWEETS_CONUT = 50;

export const fetchTweets = params => {
  const superagent = getSuperagent();
  return superagent.get(
    `1.1/statuses/user_timeline.json?screen_name=${
      params.userName
    }&count=${FETCHED_TWEETS_CONUT}`
  );
};

export const fetchFakeTweets = params => {
  return ExampleResponse;
};

const getSuperagent = () => {
  const superagent = Defaults();
  const token = localStorage.getItem('token');
  superagent.set('Content-Type', 'application/json');
  superagent.set('Authorization', `Bearer ${token}`);
  return superagent;
};
