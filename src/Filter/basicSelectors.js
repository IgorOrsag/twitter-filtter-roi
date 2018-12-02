export const mentionCountSelector = (state, { filter: { mentionCount } }) =>
  mentionCount && {
    ...mentionCount,
    value: +mentionCount.value,
    tweetProp: 'mentionCount'
  };

export const hashtagCountSelector = (state, { filter: { hashtagCount } }) =>
  hashtagCount && {
    ...hashtagCount,
    value: +hashtagCount.value,
    tweetProp: 'hashtagCount'
  };

export const dateSelector = (state, { filter: { date } }) =>
  date && {
    ...date,
    value: Date.parse(date.value),
    tweetProp: 'dateTimestamp'
  };
export const likeSelector = (state, { filter: { like } }) =>
  like && {
    ...like,
    value: +like.value,
    tweetProp: 'favorite_count'
  };
export const tweetsSelector = state => state.tweets;
