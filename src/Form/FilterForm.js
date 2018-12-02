import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DATE_OPERATORS } from './enum';

export const FilterForm = ({ handleSubmit, handleChange, state }) => (
  <form className="form" onSubmit={handleSubmit}>
    <FormControl
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
      state={state.date}
      onChange={handleChange}
      operators={DATE_OPERATORS}
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
