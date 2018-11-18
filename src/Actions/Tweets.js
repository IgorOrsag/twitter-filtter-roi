import {
  SET_TWEETS,
  EMBED_TWEETS,
  SORT_DATE_ASC,
  SORT_DATE_DESC
} from './Constants';
import {
  fetchTweets,
  fetchFakeTweets,
  fetchEmbed
} from './../Request/TwitterRequest';

export const setTweets = params => async dispatch => {
  const res = await fetchTweets(params);
  dispatch({
    type: SET_TWEETS,
    payload: res.body
  });
  return res.body;
};

export const sortDateAsc = () => dispatch => {
  return dispatch({
    type: SORT_DATE_ASC
  });
};

export const sortDateDesc = () => dispatch => {
  return dispatch({
    type: SORT_DATE_DESC
  });
};

export const setFakeTweets = params => dispatch => {
  const tweets = fetchFakeTweets().statuses;

  dispatch({
    type: SET_TWEETS,
    payload: tweets
  });
  return tweets;
};

// export const setFakeTweets = params => async dispatch => {
//   const tweets = fetchFakeTweets();
//   const embedded = await getEmbeded(tweets);

//   dispatch({
//     type: SET_TWEETS,
//     payload: embedded
//   });
//   return embedded;
// };

// export const embedTweets = tweets => async dispatch => {
//   const embedded = getEmbeded(tweets);
//   dispatch({
//     type: EMBED_TWEETS,
//     payload: embedded
//   });
//   return embedded;
// };

const getEmbeded = tweets => {
  return Promise.all(
    tweets.statuses.map(async tweet => {
      const {
        entities: { urls }
      } = tweet;
      const { html } = await fetchEmbed(urls[0].expanded_url);
      return { ...tweet, html };
    })
  );
};
