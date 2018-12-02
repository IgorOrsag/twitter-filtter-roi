import { createSelector } from 'reselect';
import { tweetsSelector, dateSelector } from './basicSelectors';
import { filterDate } from './dateOperators';

export const filterDateSelector = createSelector(
  tweetsSelector,
  dateSelector,
  filterDate
);
