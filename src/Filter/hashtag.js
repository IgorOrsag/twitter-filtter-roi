import { createSelector } from 'reselect';
import { tweetsSelector, hashtagCountSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';
import { filterArray } from './textOperators';

export const filterHashtagCountSelector = createSelector(
  tweetsSelector,
  hashtagCountSelector,
  filterNumeric
);

const hashtagMatchSelector = (state, { filter: { hashtagMatch } }) =>
  hashtagMatch && {
    ...hashtagMatch,
    value: hashtagMatch.value,
    tweetProp: 'hashtags',
    entityProp: 'text'
  };

export const filterHashtagMatchSelector = createSelector(
  tweetsSelector,
  hashtagMatchSelector,
  filterArray
);
