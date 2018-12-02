import { FILTER_OPERATORS } from './operators';
import { filter, isUndefined, isEmpty } from 'lodash';

export const filterDate = (tweets, filterParams) => {
  if (isUndefined(filterParams)) {
    return tweets;
  }
  const { operator, value, tweetProp } = filterParams;
  if (!value) {
    return tweets;
  }
  switch (operator) {
    case FILTER_OPERATORS.GREATER:
      return filter(tweets, tweet => tweet[tweetProp] > value);
    case FILTER_OPERATORS.GREATER_INCL:
      return filter(tweets, tweet => tweet[tweetProp] >= value);
    case FILTER_OPERATORS.LESS:
      return filter(tweets, tweet => tweet[tweetProp] < value);
    case FILTER_OPERATORS.LESS_INCL:
      return filter(tweets, tweet => tweet[tweetProp] <= value);
    case FILTER_OPERATORS.EQUAL:
      return filter(tweets, tweet => tweet[tweetProp] === value);
    case FILTER_OPERATORS.NOT_EQUAL:
      return filter(tweets, tweet => tweet[tweetProp] !== value);
    default:
      return tweets;
  }
};
