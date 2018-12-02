import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';

export const SearchForm = ({ handleSubmit, handleChange, state }) => (
  <Form className="form" inline onSubmit={handleSubmit}>
    <FormControl
      id="userName"
      value={state.userName}
      type="text"
      onChange={handleChange}
      name="userName"
      //   label="Text"
      placeholder="Enter twitter user"
    />{' '}
    <Button className="btn btn-primary" value="submit" type="submit">
      Search
    </Button>
  </Form>
);
