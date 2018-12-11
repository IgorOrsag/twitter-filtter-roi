import * as ACTIONS from '../Actions/Constants';
import { parseTweet } from '../Utils/parser';

const initialState = [];

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TWEETS:
      return [...action.payload.map(parseTweet)];
    default:
      return state;
  }
};
