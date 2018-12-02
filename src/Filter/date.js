import { createSelector } from 'reselect';
import { tweetsSelector, dateSelector } from './basicSelectors';
import { FILTER_OPERATORS } from './operators';
import { filter, isUndefined } from 'lodash';

export const filterDateSelector = createSelector(
  tweetsSelector,
  dateSelector,
  (tweets, filterParams) => {
    if (isUndefined(filterParams)) {
      return tweets;
    }
    const { operator, value, tweetProp } = filterParams;
    switch (operator) {
      case FILTER_OPERATORS.GREATER:
        return tweets;
      case FILTER_OPERATORS.GREATER_INCL:
        return tweets;
      case FILTER_OPERATORS.LESS:
        return filter(tweets, tweet => tweet[tweetProp] < value);
      case FILTER_OPERATORS.LESS_INCL:
        return filter(tweets, tweet => tweet[tweetProp] <= value);
      case FILTER_OPERATORS.EQUAL:
        return tweets;
      case FILTER_OPERATORS.NOT_EQUAL:
        return tweets;
      default:
        return tweets;
    }
  }
);
