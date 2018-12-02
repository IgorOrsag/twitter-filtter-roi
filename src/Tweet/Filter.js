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
  const { date, like, mentionCount, hashtagCount } = filterState;
  const [formState, setFormState] = useState({
    userName: userName,
    date: date || defaultFiledState,
    like: like || defaultFiledState,
    mentionCount: mentionCount || defaultFiledState,
    hashtagCount: hashtagCount || defaultFiledState
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
      handleChange={event => {
        const { name, value } = event.target;
        const params = name.split('.');
        const filterName = head(params);
        const filterProperty = last(params);
        setFormState({
          ...formState,
          [filterName]: {
            ...formState[filterName],
            [filterProperty]: value
          }
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
