import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { last, head, omit, omitBy } from 'lodash';
import { FilterForm } from '../Form/FilterForm';
import { setTweets } from '../Actions/Tweets';
import { getParams, getUserName } from './../Utils/router';
import { FILTER_OPERATORS } from './../Filter/operators';

const mapDispatchToProps = { setTweets };

const defaultFiledState = { value: '', operator: FILTER_OPERATORS.EQUAL };

const Filter = ({ setTweets, location, history, filterState, userName }) => {
  const {
    date,
    like,
    tweetLength,
    mentionCount,
    hashtagCount,
    occurance,
    mentionMatch,
    hashtagMatch
  } = filterState;
  const [formState, setFormState] = useState({
    userName: userName || '',
    date: date || defaultFiledState,
    like: like || defaultFiledState,
    tweetLength: tweetLength || defaultFiledState,
    mentionCount: mentionCount || defaultFiledState,
    hashtagCount: hashtagCount || defaultFiledState,
    occurance: occurance || defaultFiledState,
    mentionMatch: mentionMatch || defaultFiledState,
    hashtagMatch: hashtagMatch || defaultFiledState
  });
  return (
    <FilterForm
      state={formState}
      handleSubmit={event => {
        event.preventDefault();
        setTweets({ userName: formState.userName });
        history.push({
          ...location,
          search: `?userName=${formState.userName}`
        });
      }}
      handleFilter={event => {
        event.preventDefault();

        history.push({
          ...location,
          search: `?userName=${formState.userName}&filter=${JSON.stringify(
            omitBy(
              omit(formState, 'userName'),
              ({ value }) => value === defaultFiledState.value
            )
          )}`
        });
      }}
      handleFilterChange={event => {
        const { name, value } = event.target;
        const [filterName, filterProperty] = name.split('.');
        setFormState({
          ...formState,
          [filterName]: {
            ...formState[filterName],
            [filterProperty]: value
          }
        });
      }}
      handleChange={event => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
      }}
    />
  );
};
const mapStateToProps = (state, { location, history }) => {
  const filterState = getParams(location.search, 'filter');
  const userName = getUserName(location.search);

  return {
    location,
    history,
    filterState,
    userName
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
);
