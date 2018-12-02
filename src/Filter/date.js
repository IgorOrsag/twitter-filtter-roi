import { createSelector } from 'reselect';
import { tweetsSelector, dateSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';

export const filterDateSelector = createSelector(
  tweetsSelector,
  dateSelector,
  filterNumeric
);
