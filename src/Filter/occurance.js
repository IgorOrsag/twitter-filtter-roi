import { createSelector } from 'reselect';
import { tweetsSelector } from './basicSelectors';
import { filterText } from './textOperators';

const occuranceSelector = (state, { filter: { occurance } }) =>
  occurance && {
    ...occurance,
    value: occurance.value,
    tweetProp: 'text'
  };

export const filterOccuranceSelector = createSelector(
  tweetsSelector,
  occuranceSelector,
  filterText
);
