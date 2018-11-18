import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { Button } from 'react-bootstrap';

export const FilterForm = ({ handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <FieldGroup
      id="userName"
      type="text"
      onChange={handleChange}
      name="userName"
      //   label="Text"
      placeholder="Enter twitter user"
    />
    <FieldGroup
      id="date"
      type="date"
      onChange={handleChange}
      name="date"
      label="Date"
      placeholder="Enter twitter user"
    />
    {/* datepicker */}
    {/* length */}
    {/* number of likes */}
    {/* number of mentions (eg. @user) */}
    {/* hashtags (eg. #hashtag)  */}
    {/* substring occurance */}
    {/* exact match for mention or hashtag */}
    <Button className="btn btn-primary" value="submit" type="submit">
      Search
    </Button>
  </form>
);
