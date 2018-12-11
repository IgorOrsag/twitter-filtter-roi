import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { toggleStats } from './../Actions/Tweets';

import Filter from './Filter';
import Search from './Search';
import Sorter from './Sorter';

export const Menu = ({ hasTweets, toggleStats }) => {
  const [isFilter, setIsFilter] = useState(hasTweets);
  return (
    <div className="form-r">
      {isFilter ? <Filter /> : <Search />}

      {hasTweets ? (
        <div className="flex-container">
          <button
            className="btn btn-default filter-item"
            onClick={() => toggleStats(true)}
          >
            Stats
          </button>
          <button
            className="btn btn-default filter-item"
            onClick={() => setIsFilter(!isFilter)}
          >
            {isFilter ? 'Hide filter' : 'Show filter'}
          </button>
          <Sorter />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hasTweets: state.tweets.length ? true : false
  };
};

export default connect(
  mapStateToProps,
  { toggleStats }
)(Menu);
