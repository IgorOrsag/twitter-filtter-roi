import { SORT } from '../Actions/Constants';

import { sortBy, reverse } from 'lodash';

const sortByDateAsc = items => sortBy(items, i => i.dateTimestamp);
const sortByDateDesc = items => reverse(sortBy(items, i => i.dateTimestamp));

const sortByLikesAsc = items => sortBy(items, i => i.favorite_count);
const sortByLikesDesc = items => reverse(sortBy(items, i => i.favorite_count));

export const sortTweets = (tweets = [], action) => {
  switch (action.sortType) {
    case SORT.DATE_DESC:
      return sortByDateDesc(tweets);
    case SORT.DATE_ASC:
      return sortByDateAsc(tweets);
    case SORT.LIKES_DESC:
      return sortByLikesDesc(tweets);
    case SORT.LIKES_ASC:
      return sortByLikesAsc(tweets);
    default:
      return tweets;
  }
};
