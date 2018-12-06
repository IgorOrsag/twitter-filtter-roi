import { reduce, forEach, isUndefined, uniqBy } from 'lodash';

const getLikesSum = tweets =>
  reduce(tweets, (sum, tweet) => sum + tweet.favorite_count, 0);
const getAverageLikes = tweets =>
  tweets.length ? getLikesSum(tweets) / tweets.length : 0;
const getMentions = tweets => {
  const mentions = {};
  forEach(tweets, tweet =>
    forEach(uniqBy(tweet.user_mentions, 'screen_name'), ({ screen_name }) => {
      if (isUndefined(mentions[screen_name])) {
        mentions[screen_name] = 1;
      } else {
        ++mentions[screen_name];
      }
    })
  );
  return mentions;
};

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
