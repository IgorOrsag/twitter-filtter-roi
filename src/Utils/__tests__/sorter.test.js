import { head, last } from 'lodash';
import { sortTweets } from './../sorter';
import { SORT } from './../../Actions/Constants';

const tweets = [
  {
    text:
      'Why let facts and the reality that I  have been lecturing about the appalling acts of the Nazis for thirty years in… https://t.co/JgHjGG3Uj4',
    favorite_count: 541,
    dateTimestamp: 1543621933000,
    date: '01.12.18 00:52'
  },
  {
    text:
      'This looks like fun. We can multiply the oppressors without limit. https://t.co/BsRKwp0T3z',
    favorite_count: 324,
    dateTimestamp: 1543621774000,
    date: '01.12.18 00:49'
  },
  {
    text: 'Live on Sirius @FactionTalk Channel 103 The Jason Ellis show now',
    favorite_count: 106,
    dateTimestamp: 1543616380000,
    date: '30.11.18 23:19'
  },
  {
    text:
      'If you need to straighten out your life, past, present and future, this program works: https://t.co/pdIaUxkc7R Writ… https://t.co/Av1DXslXdG',
    favorite_count: 318,
    dateTimestamp: 1543607703000,
    date: '30.11.18 20:55'
  },
  {
    text:
      'On live at 11 with @RubinReport and @benshapiro on the Rubin Report: https://t.co/EAgqvkVOJA',
    favorite_count: 771,
    dateTimestamp: 1543603347000,
    date: '30.11.18 19:42'
  }
];
const sortedTweets = sortTweets(tweets, { sortType: SORT.DATE_ASC });

test('sorting tweets ascending', () => {
  expect(last(sortedTweets).dateTimestamp).toBeGreaterThan(
    head(sortedTweets).dateTimestamp
  );
});

test('sorting tweets not same', () => {
  expect(sortedTweets).not.toBe(tweets);
});

test('sorting tweets has same length', () => {
  expect(sortedTweets).toHaveLength(tweets.length);
});

const sortedTweetsDesc = sortTweets(tweets, { sortType: SORT.DATE_DESC });

test('sorting tweets descending', () => {
  expect(head(sortedTweetsDesc).dateTimestamp).toBeGreaterThan(
    last(sortedTweetsDesc).dateTimestamp
  );
});
