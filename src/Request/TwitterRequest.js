// header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//  oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//  oauth_token="access-token-for-authed-user", oauth_version="1.0"'
import { ExampleResponse } from './ExampleResponse';
import Defaults from 'superagent-defaults';

const consumer_key_for_app = '';

const headers = {
  authorization: { oauth_consumer_key: consumer_key_for_app },
  'Content-Type': 'application/json'
};

export const fetchTweets = params => {
  const superagent = getSuperagent();
  // https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2

  // return superagent.get(`search/tweets.json?q=${params.userName}`)
  return superagent.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2`
  );
  // fetch(
  //   `https://api.twitter.com/1.1/search/tweets.json?q=${params.userName}`,
  //   {
  //     method: 'GET',
  //     headers
  //   }
  // );
};

export const fetchFakeTweets = params => {
  return ExampleResponse;
};

const getSuperagent = () => {
  const superagent = Defaults();
  superagent.set('Content-Type', 'application/json');
  // superagent.set('Authorization', {});
  return superagent;
};

// export const fetchEmbed = async url => {
//   const res = await superagent.get(
//     `oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395`
//   );
//   // const res = await fetch(
//   //   `oembed?url=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F507185938620219395`,
//   //   {
//   //     method: 'GET',
//   //     'Content-Type': 'application/json'
//   //   }
//   // );
//   console.log(res);
//   return res.body;
// };
