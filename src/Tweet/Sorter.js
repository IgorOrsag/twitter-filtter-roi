import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';

import {
  sortDateAsc,
  sortDateDesc,
  sortLikesAsc,
  sortLikesDesc
} from '../Actions/Tweets';

const mapDispatchToProps = {
  sortDateAsc,
  sortDateDesc,
  sortLikesAsc,
  sortLikesDesc
};

const SortButton = ({ sortAsc, sortDesc, caption }) => {
  const [isASC, setIsASC] = useState(false);
  return (
    <button
      className="btn btn-default filter-item"
      onClick={() => {
        isASC ? sortAsc() : sortDesc();
        setIsASC(!isASC);
      }}
    >
      {caption} {isASC ? '<' : '>'}
    </button>
  );
};

const Sorter = ({ sortDateAsc, sortDateDesc, sortLikesAsc, sortLikesDesc }) => {
  return (
    <>
      <SortButton
        sortAsc={sortDateAsc}
        sortDesc={sortDateDesc}
        caption="sort date"
      />
      <SortButton
        sortAsc={sortLikesAsc}
        sortDesc={sortLikesDesc}
        caption="sort likes"
      />
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Sorter);
