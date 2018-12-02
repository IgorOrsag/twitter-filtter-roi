import { FILTER_OPERATORS } from './operators';
import { filter, isUndefined } from 'lodash';

export const filterNumeric = (tweets, filterParams) => {
  if (isUndefined(filterParams)) {
    return tweets;
  }
  const { operator, value, tweetProp } = filterParams;
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
