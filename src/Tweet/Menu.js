import React from 'react';
import { useState } from 'react';

import Filter from './Filter';
import Search from './Search';
import Sorter from './Sorter';

export const Menu = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      {isFilter ? <Filter /> : <Search />}

      <button onClick={() => setIsFilter(!isFilter)}>></button>
      <Sorter />
    </>
  );
};
