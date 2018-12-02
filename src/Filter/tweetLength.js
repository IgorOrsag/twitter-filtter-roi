import { createSelector } from 'reselect';
import { tweetsSelector } from './basicSelectors';
import { filterNumeric } from './numericOperators';

const tweetLengthSelector = (state, { filter: { tweetLength } }) =>
  tweetLength && {
    ...tweetLength,
    value: +tweetLength.value,
    tweetProp: 'tweetLength'
  };

export const filterTweetLengthSelector = createSelector(
  tweetsSelector,
  tweetLengthSelector,
  filterNumeric
);
