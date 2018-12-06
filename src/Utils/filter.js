import { FILTER_OPERATORS } from './../Filter/operators';

export const defaultFiledState = {
  value: '',
  operator: FILTER_OPERATORS.EQUAL
};
export const defaultMatchFiledState = {
  value: '',
  operator: FILTER_OPERATORS.INCLUDES
};

export const getDefaultFilter = () => ({
  //   userName: '',
  date: defaultFiledState,
  like: defaultFiledState,
  tweetLength: defaultFiledState,
  mentionCount: defaultFiledState,
  hashtagCount: defaultFiledState,
  occurance: defaultMatchFiledState,
  mentionMatch: defaultMatchFiledState,
  hashtagMatch: defaultMatchFiledState
});

export const getFilter = (
  {
    date,
    like,
    tweetLength,
    mentionCount,
    hashtagCount,
    occurance,
    mentionMatch,
    hashtagMatch
  },
  userName
) => ({
  userName: userName || '',
  date: date || defaultFiledState,
  like: like || defaultFiledState,
  tweetLength: tweetLength || defaultFiledState,
  mentionCount: mentionCount || defaultFiledState,
  hashtagCount: hashtagCount || defaultFiledState,
  occurance: occurance || defaultMatchFiledState,
  mentionMatch: mentionMatch || defaultMatchFiledState,
  hashtagMatch: hashtagMatch || defaultMatchFiledState
});
