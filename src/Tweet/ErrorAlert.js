import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { setError } from './../Actions/Tweets';

const ErrorAlert = ({ error, setError }) => {
  if (error) {
    setTimeout(() => setError(null), 1000 * 5);
    return <Alert bsStyle="danger">{error}</Alert>;
  }
  return null;
};
export default connect(
  ({ error }) => ({ error }),
  { setError }
)(ErrorAlert);
