export const dateSelector = (state, { filter: { date } }) => date;
export const likeSelector = (state, { filter: { like } }) => like;
export const tweetsSelector = state => state.tweets;
