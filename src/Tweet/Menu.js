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

      {hasTweets ? (
        <div className="sort">
          <button
            className="btn btn-default"
            onClick={() => setIsFilter(!isFilter)}
          >
            {isFilter ? 'hide filter' : 'show filter'}
          </button>
          <Sorter />
        </div>
      ) : null}
    </div>
  );
};
