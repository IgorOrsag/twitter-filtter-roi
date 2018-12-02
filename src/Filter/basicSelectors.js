export const dateSelector = (state, { filter: { date } }) => ({
  ...date,
  value: Date.parse(date.value),
  tweetProp: 'dateTimestamp'
});
export const likeSelector = (state, { filter: { like } }) => ({
  ...like,
  tweetProp: 'favorite_count'
});
export const tweetsSelector = state => state.tweets;
