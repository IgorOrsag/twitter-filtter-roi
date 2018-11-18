import { SET_TWEETS, EMBED_TWEETS } from './Constants';
import { fetchTweets, fetchFakeTweets } from './../Request/TwitterRequest';

export const setTweets = params => async dispatch => {
  const res = await fetchTweets(params);
  dispatch({
    type: SET_TWEETS,
    payload: res.body
  });
  return res.body;
};

export const setFakeTweets = params => dispatch => {
  const tweets = fetchFakeTweets().statuses;

  dispatch({
    type: SET_TWEETS,
    payload: tweets
  });
  return tweets;
};

// export const embedTweets = tweets => async dispatch => {
//   const embedded = getEmbeded(tweets);
//   dispatch({
//     type: EMBED_TWEETS,
//     payload: embedded
//   });
//   return embedded;
// };

// const getEmbeded = tweets => {
//   return Promise.all(
//     tweets.statuses.map(async ({ entities: { urls } }) =>
//       fetchEmbed(urls[0].expanded_url)
//     )
//   );
// };
