import React from 'react';
import { SearchForm } from '../Form/SearchForm';
import { useState } from 'react';

export const Search = () => {
  const [formState, setFormState] = useState({ userName: null });
  return (
    <SearchForm
      handleSubmit={event => {
        event.preventDefault();
        console.log('hello', formState);
      }}
      handleChange={event => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }}
    />
  );
};
