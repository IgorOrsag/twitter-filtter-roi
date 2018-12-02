import { createSelector } from 'reselect';
import { tweetsSelector, mentionCountSelector } from './basicSelectors';
import { filterArray } from './textOperators';
import { filterNumeric } from './numericOperators';

export const filterMentionCountSelector = createSelector(
  tweetsSelector,
  mentionCountSelector,
  filterNumeric
);

const mentionMatchSelector = (state, { filter: { mentionMatch } }) =>
  mentionMatch && {
    ...mentionMatch,
    value: mentionMatch.value,
    tweetProp: 'user_mentions',
    entityProp: 'screen_name'
  };

export const filterMentionMatchSelector = createSelector(
  tweetsSelector,
  mentionMatchSelector,
  filterArray
);
