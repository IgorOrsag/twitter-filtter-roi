import { reduce } from 'lodash';

const getLikesSum = tweets =>
  reduce(tweets, (sum, tweet) => sum + tweet.favorite_count, 0);
const getAverageLikes = tweets => getLikesSum(tweets) / tweets.length;
const getMentions = tweets => [];

export const getStats = tweets => ({
  likesSum: {
    label: 'Sum of all likes',
    value: getLikesSum(tweets)
  },
  likesPerTweet: {
    label: 'Avarage likes per tweet',
    value: getAverageLikes(tweets)
  },
  mentions: {
    label: 'All mentions in tweets with number of unique occurences',
    value: getMentions(tweets)
  }
});
