import { createSelector } from 'reselect';
import { intersectionBy } from 'lodash';
import { filterDateSelector } from './date';
import { filterLikeSelector } from './like';
import { filterMentionCountSelector } from './mention';
import { filterHashtagCountSelector } from './hashtag';

const filter = createSelector(
  filterDateSelector,
  filterLikeSelector,
  filterMentionCountSelector,
  filterHashtagCountSelector,
  (dateFiltered, likeFiltered, mentionCountFiletered, hashtagCountFiltered) =>
    intersectionBy(
      dateFiltered,
      likeFiltered,
      mentionCountFiletered,
      hashtagCountFiltered,
      'id'
    )
);

export default filter;
