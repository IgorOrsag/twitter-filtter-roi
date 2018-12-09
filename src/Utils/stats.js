import { reduce, forEach, isUndefined, uniqBy, round, toPairs } from 'lodash';

const getLikesSum = tweets =>
  reduce(tweets, (sum, tweet) => sum + tweet.favorite_count, 0);
const getAverageLikes = tweets =>
  tweets.length ? round(getLikesSum(tweets) / tweets.length, 2) : 0;
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

const sortMetions = mentions => toPairs(mentions).sort((a, b) => b[1] - a[1]);

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
    value: sortMetions(getMentions(tweets))
  }
});
