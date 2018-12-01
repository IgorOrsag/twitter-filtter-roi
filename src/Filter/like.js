import { createSelector } from 'reselect';
import { filter } from 'lodash';
import { tweetsSelector, likeSelector } from './basicSelectors';
import { FILTER_OPERATORS } from './operators';

export const filterLikeSelector = createSelector(
  tweetsSelector,
  likeSelector,
  (tweets, { operator, value }) => {
    switch (operator) {
      case FILTER_OPERATORS.GREATER:
        return tweets;
      case FILTER_OPERATORS.GREATER_INCL:
        return tweets;
      case FILTER_OPERATORS.LESS:
        return filter(tweets, ({ favorite_count }) => favorite_count < value);
      case FILTER_OPERATORS.LESS_INCL:
        return tweets;
      case FILTER_OPERATORS.EQUAL:
        return filter(tweets, ({ favorite_count }) => favorite_count <= value);
      case FILTER_OPERATORS.NOT_EQUAL:
        return tweets;
      default:
        return tweets;
    }
  }
);
