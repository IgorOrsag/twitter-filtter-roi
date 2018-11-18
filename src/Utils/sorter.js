import { sortBy, reverse } from 'lodash';

export const sortByDateAsc = items => sortBy(items, i => i.dateTimestamp);
export const sortByDateDesc = items =>
  reverse(sortBy(items, i => i.dateTimestamp));

export const sortByLikesAsc = items => sortBy(items, i => i.favorite_count);
export const sortByLikesDesc = items =>
  reverse(sortBy(items, i => i.favorite_count));
