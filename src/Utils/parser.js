import { format } from 'date-fns';

export const parseTweet = tweet => {
  const dateTimestamp = Date.parse(tweet.created_at);
  return {
    ...tweet,
    dateTimestamp,
    date: format(dateTimestamp, 'DD.MM.YY HH:mm')
  };
};
