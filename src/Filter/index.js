import { createSelector } from 'reselect';
import { intersectionBy } from 'lodash';
import { filterDateSelector } from './date';
import { filterLikeSelector } from './like';
import { filterTweetLengthSelector } from './tweetLength';
import { filterOccuranceSelector } from './occurance';
import {
  filterMentionCountSelector,
  filterMentionMatchSelector
} from './mention';
import {
  filterHashtagCountSelector,
  filterHashtagMatchSelector
} from './hashtag';

const filter = createSelector(
  filterDateSelector,
  filterLikeSelector,
  filterTweetLengthSelector,
  filterOccuranceSelector,
  filterMentionCountSelector,
  filterMentionMatchSelector,
  filterHashtagCountSelector,
  filterHashtagMatchSelector,
  (
    dateFiltered,
    likeFiltered,
    tweetLengthFiltered,
    occuranceFiltered,
    mentionCountFiletered,
    mentionMatchFiltered,
    hashtagCountFiltered,
    hashtagMatchFiltered
  ) =>
    intersectionBy(
      dateFiltered,
      likeFiltered,
      tweetLengthFiltered,
      occuranceFiltered,
      mentionCountFiletered,
      mentionMatchFiltered,
      hashtagCountFiltered,
      hashtagMatchFiltered,
      'id'
    )
);

export default filter;
