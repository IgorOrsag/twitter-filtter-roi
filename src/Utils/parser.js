import { format } from 'date-fns';

export const parseTweet = tweet => {
  const {
    created_at,
    text,
    favorite_count,
    id,
    entities: { user_mentions, hashtags }
  } = tweet;
  const dateTimestamp = Date.parse(created_at);
  return {
    id,
    text,
    tweetLength: text.length,
    favorite_count,
    dateTimestamp,
    user_mentions,
    mentionCount: user_mentions.length,
    hashtags,
    hashtagCount: hashtags.length,
    date: format(dateTimestamp, 'DD.MM.YY HH:mm')
  };
};
