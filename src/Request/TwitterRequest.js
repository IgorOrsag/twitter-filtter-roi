import { ExampleResponse } from './ExampleResponse';
import Defaults from 'superagent-defaults';

export const fetchTweets = params => {
  const superagent = getSuperagent();
  // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

  // return superagent.get(`search/tweets.json?q=${params.userName}`)
  return superagent.get(
    `1.1/statuses/user_timeline.json?screen_name=${params.userName}&count=5`
  );
};

export const fetchUsers = params => {
  const superagent = getSuperagent();
  console.log('users');

  return superagent.get(`1.1/users/search.json?q=peterson&page=1&count=5`);
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
