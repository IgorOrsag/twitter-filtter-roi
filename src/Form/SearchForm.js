import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { Button, Form } from 'react-bootstrap';

export const SearchForm = ({ handleSubmit, handleChange }) => (
  <Form className="form" inline onSubmit={handleSubmit}>
    <FieldGroup
      id="userName"
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
