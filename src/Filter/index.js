import { createSelector } from 'reselect';
import { intersectionBy } from 'lodash';
import { filterDateSelector } from './date';
import { filterLikeSelector } from './like';

const filter = createSelector(
  filterDateSelector,
  filterLikeSelector,
  (dateFiltered, likeFiltered) =>
    intersectionBy(dateFiltered, likeFiltered, 'id')
);

export default filter;
