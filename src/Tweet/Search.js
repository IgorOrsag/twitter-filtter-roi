import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { SearchForm } from '../Form/SearchForm';
import { setTweets, setFakeTweets } from '../Actions/Tweets';

const mapDispatchToProps = { setFakeTweets };

const Search = props => {
  console.log(props);
  const [formState, setFormState] = useState({ userName: null });
  return (
    <SearchForm
      handleSubmit={event => {
        event.preventDefault();
        console.log('hello', formState);
        props.setFakeTweets(formState);
      }}
      handleChange={event => {
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

export default connect(
  null,
  mapDispatchToProps
)(Search);
