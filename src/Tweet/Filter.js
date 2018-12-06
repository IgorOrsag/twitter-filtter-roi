import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { omit, omitBy } from 'lodash';
import { FilterForm } from '../Form/FilterForm';
import { setTweets } from '../Actions/Tweets';
import { getParams, getUserName } from './../Utils/router';
import {
  getFilter,
  getDefaultFilter,
  defaultFiledState
} from './../Utils/filter';

const mapDispatchToProps = { setTweets };

const Filter = ({ setTweets, location, history, filterState, userName }) => {
  const [formState, setFormState] = useState(getFilter(filterState, userName));
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
      handleFilterReset={event => {
        event.preventDefault();
        setFormState({
          ...formState,
          ...getDefaultFilter()
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
