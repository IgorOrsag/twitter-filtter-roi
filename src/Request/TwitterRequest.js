// header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//  oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//  oauth_token="access-token-for-authed-user", oauth_version="1.0"'
import { ExampleResponse } from './ExampleResponse';
const consumer_key_for_app = '';

const headers = {
  authorization: { oauth_consumer_key: consumer_key_for_app },
  'Content-Type': 'application/json'
};

export const fetchTweets = params => {
  return fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${params.userName}`,
    {
      method: 'GET',
      headers
    }
  );
};

export const fetchFakeTweets = params => {
  return ExampleResponse;
};
