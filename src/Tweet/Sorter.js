import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';

import { setSortType } from '../Actions/Sort';
import { SORT } from './../Actions/Constants';
const mapDispatchToProps = {
  setSortType
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

const Sorter = ({ setSortType }) => {
  return (
    <>
      <SortButton
        sortAsc={() => setSortType(SORT.DATE_ASC)}
        sortDesc={() => setSortType(SORT.DATE_DESC)}
        caption="sort date"
      />
      <SortButton
        sortAsc={() => setSortType(SORT.LIKES_ASC)}
        sortDesc={() => setSortType(SORT.LIKES_DESC)}
        caption="sort likes"
      />
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Sorter);
