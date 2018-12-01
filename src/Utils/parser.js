import { format } from 'date-fns';

export const parseTweet = tweet => {
  const { created_at, text, favorite_count, id } = tweet;
  const dateTimestamp = Date.parse(created_at);
  return {
    id,
    text,
    favorite_count,
    dateTimestamp,
    date: format(dateTimestamp, 'DD.MM.YY HH:mm')
  };
};
