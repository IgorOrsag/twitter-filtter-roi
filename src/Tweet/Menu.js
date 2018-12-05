import React from 'react';
import { useState } from 'react';

import Filter from './Filter';
import Search from './Search';
import Sorter from './Sorter';
import { Stats } from './Stats';

export const Menu = ({ hasTweets }) => {
  const [isFilter, setIsFilter] = useState(hasTweets);
  const [show, setShow] = useState(false);
  return (
    <div className="form-r">
      {isFilter ? <Filter /> : <Search />}

      {hasTweets ? (
        <div className="flex-container">
          <button
            className="btn btn-default filter-item"
            onClick={() => setShow(true)}
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
          <Stats show={show} handleHide={() => setShow(false)} />
        </div>
      ) : null}
    </div>
  );
};
