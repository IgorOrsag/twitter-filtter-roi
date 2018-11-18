import React from 'react';
import { format } from 'date-fns';

export const TwitterItem = props => {
  console.log(props);
  return (
    <>
      <p>{props.text}</p>
      <p>{props.date}</p>
    </>
  );
};
