import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { FilterForm } from '../Form/FilterForm';
import { setTweets, setFakeTweets } from '../Actions/Tweets';

const mapDispatchToProps = { setFakeTweets };

const Filter = props => {
  console.log(props);
  const [formState, setFormState] = useState({
    userName: null,
    date: null
  });
  return (
    <FilterForm
      handleSubmit={event => {
        event.preventDefault();
        console.log('hello', formState);
        props.history.push('/', formState);
        // props.setFakeTweets(formState);
      }}
      handleChange={event => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }}
      handleFilterChange={event => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }}
    />
  );
};
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Filter)
);
