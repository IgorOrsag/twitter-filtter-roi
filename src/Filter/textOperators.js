import { FILTER_OPERATORS } from './operators';
import { filter, isUndefined, find } from 'lodash';

export const filterText = (tweets, filterParams) => {
  if (isUndefined(filterParams)) {
    return tweets;
  }
  const { operator, value, tweetProp } = filterParams;
  if (value === '') {
    return tweets;
  }
  switch (operator) {
    case FILTER_OPERATORS.INCLUDES:
      return filter(tweets, tweet => tweet[tweetProp].indexOf(value) !== -1);
    case FILTER_OPERATORS.NOT_INCLUDES:
      return filter(tweets, tweet => tweet[tweetProp].indexOf(value) !== -1);
    default:
      return tweets;
  }
};

export const filterArray = (tweets, filterParams) => {
  if (isUndefined(filterParams)) {
    return tweets;
  }
  const { operator, value, tweetProp, entityProp } = filterParams;
  if (value === '') {
    return tweets;
  }
  switch (operator) {
    case FILTER_OPERATORS.INCLUDES:
      return filter(
        tweets,
        tweet =>
          !isUndefined(
            find(tweet[tweetProp], item => item[entityProp] === value)
          )
      );
    case FILTER_OPERATORS.NOT_INCLUDES:
      return filter(tweets, tweet =>
        isUndefined(find(tweet[tweetProp], item => item[entityProp] === value))
      );
    default:
      return tweets;
  }
};
