import React from 'react';
import { useState } from 'react';

import Filter from './Filter';
import Search from './Search';
import Sorter from './Sorter';

export const Menu = ({ hasTweets }) => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div className="form-r">
      {isFilter ? <Filter /> : <Search />}

      {true ? (
        <div className="flex-container">
          <button className="btn btn-default filter-item">Stats</button>
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
