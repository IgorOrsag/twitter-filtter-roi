import * as ACTIONS from '../Actions/Constants';
import { parseTweet } from '../Utils/parser';
import { sortTweets } from '../Utils/sorter';

const initialState = {
  tweets: [],
  toggleStats: false
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATS:
      return { ...state, toggleStats: action.payload };
    case ACTIONS.SET_TWEETS:
      return { ...state, tweets: action.payload.map(parseTweet) };
    case ACTIONS.SORT_TWEETS:
      return { ...state, tweets: sortTweets([...state.tweets], action) };
    default:
      return state;
  }
};
