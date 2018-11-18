import {
  SET_TWEETS,
  EMBED_TWEETS,
  SORT_DATE_DESC,
  SORT_DATE_ASC
} from '../Actions/Constants';
import { parseTweet } from '../Utils/parser';
import { sortByDateAsc, sortByDateDesc } from '../Utils/sorter';

const initialState = {
  tweets: []
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return { ...state, tweets: action.payload.map(parseTweet) };
    case SORT_DATE_DESC:
      return { ...state, tweets: sortByDateDesc(state.tweets) };
    case SORT_DATE_ASC:
      return { ...state, tweets: sortByDateAsc(state.tweets) };
    case EMBED_TWEETS:
      return { ...state, tweets: action.payload };
    default:
      return state;
  }
};
