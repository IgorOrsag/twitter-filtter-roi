import { createSelector } from 'reselect';
import { tweetsSelector, dateSelector } from './basicSelectors';
import { FILTER_OPERATORS } from './operators';
import { filter } from 'lodash';

export const filterDateSelector = createSelector(
  tweetsSelector,
  dateSelector,
  (tweets, { operator, value }) => {
    switch (operator) {
      case FILTER_OPERATORS.GREATER:
        return tweets;
      case FILTER_OPERATORS.GREATER_INCL:
        return tweets;
      case FILTER_OPERATORS.LESS:
        return filter(tweets, ({ dateTimestamp }) => dateTimestamp < value);
      case FILTER_OPERATORS.LESS_INCL:
        return filter(tweets, ({ dateTimestamp }) => dateTimestamp <= value);
      case FILTER_OPERATORS.EQUAL:
        return tweets;
      case FILTER_OPERATORS.NOT_EQUAL:
        return tweets;
      default:
        return tweets;
    }
  }
);
