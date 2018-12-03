import React from 'react';
import { FieldGroup } from './FieldsFactory';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DATE_OPERATORS, TEXT_OPERATORS } from './enum';

export const FilterForm = ({
  handleSubmit,
  handleFilter,
  handleChange,
  handleFilterChange,
  state
}) => (
  <form onSubmit={handleSubmit}>
    <div className="flex-container">
      <FormControl
        id="userName"
        value={state.userName}
        className="filter-item search"
        type="text"
        onChange={handleChange}
        name="userName"
        //   label="Text"
        placeholder="Enter twitter user"
      />
      <Button
        className="btn btn-primary filter-item"
        value="submit"
        type="submit"
      >
        Search
      </Button>
      <Button
        className="btn btn-default filter-item"
        onClick={handleFilter}
        type="button"
      >
        Filter
      </Button>
    </div>
    <div className="filter-container">
      <FieldGroup
        id="date"
        type="date"
        state={state.date}
        onChange={handleFilterChange}
        operators={DATE_OPERATORS}
        name="date"
        label="Date"
        placeholder="Enter twitter user"
      />

      <FieldGroup
        id="like"
        type="number"
        state={state.like}
        onChange={handleFilterChange}
        operators={DATE_OPERATORS}
        name="like"
        label="Likes"
      />
      <FieldGroup
        id="tweetLength"
        type="number"
        state={state.tweetLength}
        onChange={handleFilterChange}
        operators={DATE_OPERATORS}
        name="tweetLength"
        label="Tweet length"
      />

      <FieldGroup
        id="mentionCount"
        type="number"
        state={state.mentionCount}
        onChange={handleFilterChange}
        operators={DATE_OPERATORS}
        name="mentionCount"
        label="Mention count"
      />

      <FieldGroup
        id="hashtagCount"
        type="number"
        state={state.hashtagCount}
        onChange={handleFilterChange}
        operators={DATE_OPERATORS}
        name="hashtagCount"
        label="Hashtag count"
      />

      <FieldGroup
        id="occurance"
        type="text"
        state={state.occurance}
        onChange={handleFilterChange}
        operators={TEXT_OPERATORS}
        name="occurance"
        label="Substring occurance"
      />

      <FieldGroup
        id="mentionMatch"
        type="text"
        state={state.mentionMatch}
        onChange={handleFilterChange}
        operators={TEXT_OPERATORS}
        name="mentionMatch"
        label="Mention match"
      />

      <FieldGroup
        id="hashtagMatch"
        type="text"
        state={state.hashtagMatch}
        onChange={handleFilterChange}
        operators={TEXT_OPERATORS}
        name="hashtagMatch"
        label="Hashtag match"
      />
    </div>
  </form>
);
