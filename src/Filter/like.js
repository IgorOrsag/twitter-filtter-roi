import { createSelector } from 'reselect';
import { tweetsSelector, likeSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';

export const filterLikeSelector = createSelector(
  tweetsSelector,
  likeSelector,
  filterNumeric
);
