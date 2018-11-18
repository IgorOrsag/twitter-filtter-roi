import { SET_TWEETS, EMBED_TWEETS } from '../Actions/Constants';

const initialState = {
  tweets: []
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return { ...state, tweets: action.payload };
    case EMBED_TWEETS:
      return { ...state, tweets: action.payload };
    default:
      return state;
  }
};
