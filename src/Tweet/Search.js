import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { SearchForm } from '../Form/SearchForm';
import { setTweets } from '../Actions/Tweets';
const mapDispatchToProps = { setTweets };

const Search = props => {
  console.log(props);
  const [formState, setFormState] = useState({ userName: null });
  return (
    <SearchForm
      handleSubmit={event => {
        event.preventDefault();
        console.log('hello', formState);
        props.setTweets(formState);
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
