import { createSelector } from 'reselect';
import { tweetsSelector, hashtagCountSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';

export const filterHashtagCountSelector = createSelector(
  tweetsSelector,
  hashtagCountSelector,
  filterNumeric
);
