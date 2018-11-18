import { sortBy, reverse } from 'lodash';

export const sortByDateAsc = items => sortBy(items, i => i.dateTimestamp);
export const sortByDateDesc = items =>
  reverse(sortBy(items, i => i.dateTimestamp));
