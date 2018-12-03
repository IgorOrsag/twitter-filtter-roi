import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { SearchForm } from '../Form/SearchForm';
import { setTweets } from '../Actions/Tweets';
import { getUserName } from './../Utils/router';
const mapDispatchToProps = { setTweets };

const Search = ({ location, history, userName, setTweets }) => {
  const [formState, setFormState] = useState({ userName: userName || '' });
  return (
    <SearchForm
      state={formState}
      handleSubmit={event => {
        event.preventDefault();
        setTweets(formState);
        history.push({
          ...location,
          search: `?userName=${formState.userName}`
        });
      }}
      handleChange={event => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }}
    />
  );
};
const mapStateToProps = (state, { location, history }) => {
  const userName = getUserName(location.search);

  return {
    location,
    history,
    userName
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
