import { createSelector } from 'reselect';
import { tweetsSelector, mentionCountSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';

export const filterMentionCountSelector = createSelector(
  tweetsSelector,
  mentionCountSelector,
  filterNumeric
);
