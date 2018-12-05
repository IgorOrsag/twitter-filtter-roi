import { FILTER_OPERATORS } from './operators';
import { filter, isUndefined, isEmpty } from 'lodash';

const DAY = 86400000;

export const filterDate = (tweets, filterParams) => {
  if (isUndefined(filterParams)) {
    return tweets;
  }
  const { operator, value, tweetProp } = filterParams;
  if (!value) {
    return tweets;
  }
  const dayRange = value + DAY;
  switch (operator) {
    case FILTER_OPERATORS.GREATER:
      return filter(tweets, tweet => tweet[tweetProp] >= dayRange);
    case FILTER_OPERATORS.GREATER_INCL:
      return filter(tweets, tweet => tweet[tweetProp] >= value);
    case FILTER_OPERATORS.LESS:
      return filter(tweets, tweet => tweet[tweetProp] < value);
    case FILTER_OPERATORS.LESS_INCL:
      return filter(tweets, tweet => tweet[tweetProp] <= dayRange);
    case FILTER_OPERATORS.EQUAL:
      return filter(
        tweets,
        tweet => tweet[tweetProp] >= value && tweet[tweetProp] < dayRange
      );
    case FILTER_OPERATORS.NOT_EQUAL:
      return filter(
        tweets,
        tweet => tweet[tweetProp] < value || tweet[tweetProp] >= dayRange
      );
    default:
      return tweets;
  }
};
