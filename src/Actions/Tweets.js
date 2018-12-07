import * as ACTIONS from './Constants';
import {
  fetchTweets,
  fetchFakeTweets
  // fetchEmbed
} from './../Request/TwitterRequest';

export const setTweets = params => async dispatch => {
  try {
    const res = await fetchTweets(params);
    dispatch({
      type: ACTIONS.SET_TWEETS,
      payload: res.body
    });
    return res.body;
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: 'No tweets found'
    });
  }
};

export const setError = error => dispatch => {
  dispatch({
    type: ACTIONS.SET_ERROR,
    payload: error
  });
};

export const toggleStats = isToggled => dispatch => {
  return dispatch({
    type: ACTIONS.TOGGLE_STATS,
    payload: isToggled
  });
};

export const sortDateAsc = () => dispatch => {
  return dispatch({
    type: ACTIONS.SORT_TWEETS,
    sortType: ACTIONS.SORT.DATE_ASC
  });
};

export const sortDateDesc = () => dispatch => {
  return dispatch({
    type: ACTIONS.SORT_TWEETS,
    sortType: ACTIONS.SORT.DATE_DESC
  });
};

export const sortLikesAsc = () => dispatch => {
  return dispatch({
    type: ACTIONS.SORT_TWEETS,
    sortType: ACTIONS.SORT.LIKES_ASC
  });
};

export const sortLikesDesc = () => dispatch => {
  return dispatch({
    type: ACTIONS.SORT_TWEETS,
    sortType: ACTIONS.SORT.LIKES_DESC
  });
};

export const setFakeTweets = params => dispatch => {
  const tweets = fetchFakeTweets().statuses;

  dispatch({
    type: ACTIONS.SET_TWEETS,
    payload: tweets
  });
  return tweets;
};
