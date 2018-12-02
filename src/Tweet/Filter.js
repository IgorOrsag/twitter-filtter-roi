import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { last, head, omit } from 'lodash';
import { FilterForm } from '../Form/FilterForm';
import { setTweets, setFakeTweets } from '../Actions/Tweets';
import { getParams } from './../Utils/router';

const mapDispatchToProps = { setFakeTweets };

const Filter = ({ location, history, filterState }) => {
  // console.log(filterState);
  const [formState, setFormState] = useState({
    userName: null,
    date: filterState.date
  });
  console.log(formState);
  return (
    <FilterForm
      state={formState}
      handleSubmit={event => {
        event.preventDefault();
        console.log('hello', formState);
        history.push({
          ...location,
          search: `?filter=${JSON.stringify(omit(formState, 'userName'))}`
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
      handleFilterChange={event => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }}
    />
  );
};
const mapStateToProps = (state, { location, history }) => {
  const filterState = getParams(location.search, 'filter');

  return {
    counter: state.counter,
    location,
    history,
    filterState
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
);
