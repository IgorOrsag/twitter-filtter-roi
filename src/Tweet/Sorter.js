import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';

import { sortDateAsc, sortDateDesc } from '../Actions/Tweets';

const mapDispatchToProps = { sortDateAsc, sortDateDesc };

const Sorter = ({ sortDateAsc, sortDateDesc }) => {
  const [isASC, setIsASC] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          isASC ? sortDateAsc() : sortDateDesc();
          setIsASC(!isASC);
        }}
      >
        sort date {isASC ? '<' : '>'}
      </button>
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Sorter);
