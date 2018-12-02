import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DATE_OPERATORS, TEXT_OPERATORS } from './enum';

export const FilterForm = ({
  handleSubmit,
  handleFilter,
  handleChange,
  state
}) => (
  <form className="form" onSubmit={handleSubmit}>
    <FormControl
      id="userName"
      value={state.userName}
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

    <FieldGroup
      id="like"
      type="number"
      state={state.like}
      onChange={handleChange}
      operators={DATE_OPERATORS}
      name="like"
      label="Likes"
    />
    <FieldGroup
      id="tweetLength"
      type="number"
      state={state.tweetLength}
      onChange={handleChange}
      operators={DATE_OPERATORS}
      name="tweetLength"
      label="Tweet length"
    />

    <FieldGroup
      id="mentionCount"
      type="number"
      state={state.mentionCount}
      onChange={handleChange}
      operators={DATE_OPERATORS}
      name="mentionCount"
      label="Mention count"
    />

    <FieldGroup
      id="hashtagCount"
      type="number"
      state={state.hashtagCount}
      onChange={handleChange}
      operators={DATE_OPERATORS}
      name="hashtagCount"
      label="Hashtag count"
    />

    <FieldGroup
      id="occurance"
      type="text"
      state={state.occurance}
      onChange={handleChange}
      operators={TEXT_OPERATORS}
      name="occurance"
      label="Substring occurance"
    />

    <FieldGroup
      id="mentionMatch"
      type="text"
      state={state.mentionMatch}
      onChange={handleChange}
      operators={TEXT_OPERATORS}
      name="mentionMatch"
      label="Mention match"
    />

    <FieldGroup
      id="hashtagMatch"
      type="text"
      state={state.hashtagMatch}
      onChange={handleChange}
      operators={TEXT_OPERATORS}
      name="hashtagMatch"
      label="Hashtag match"
    />
    <Button className="btn btn-primary" value="submit" type="submit">
      Search
    </Button>
    <Button
      className="btn btn-primary m10"
      onClick={handleFilter}
      type="button"
    >
      Filter
    </Button>
  </form>
);
