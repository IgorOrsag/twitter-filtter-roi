import * as ACTIONS from '../Actions/Constants';
import { parseTweet } from '../Utils/parser';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByLikesDesc,
  sortByLikesAsc
} from '../Utils/sorter';

const initialState = {
  tweets: []
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TWEETS:
      return { ...state, tweets: action.payload.map(parseTweet) };
    case ACTIONS.SORT_DATE_DESC:
      return { ...state, tweets: sortByDateDesc(state.tweets) };
    case ACTIONS.SORT_DATE_ASC:
      return { ...state, tweets: sortByDateAsc(state.tweets) };
    case ACTIONS.SORT_LIKES_DESC:
      return { ...state, tweets: sortByLikesDesc(state.tweets) };
    case ACTIONS.SORT_LIKES_ASC:
      return { ...state, tweets: sortByLikesAsc(state.tweets) };
    // case ACTIONS.EMBED_TWEETS:
    //   return { ...state, tweets: action.payload };
    default:
      return state;
  }
};
