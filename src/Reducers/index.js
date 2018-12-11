import { tweetReducer } from './tweetReducer';
import { sortReducer } from './sortReducer';
import { statsReducer } from './statsReducer';
import { errorReducer } from './errorReducer';

export const reducer = {
  tweets: tweetReducer,
  sort: sortReducer,
  error: errorReducer,
  stats: statsReducer
};
