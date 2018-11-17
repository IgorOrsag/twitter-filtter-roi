import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { Button } from 'react-bootstrap';

export const SearchForm = ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <FieldGroup
      id="userName"
      type="text"
      onChange={handleChange}
      name="userName"
      //   label="Text"
      placeholder="Enter twitter user"
    />
    <Button class="btn-primary" value="submit" type="submit">
      Search
    </Button>
  </form>
);
