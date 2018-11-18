import React from 'react';
import { useState } from 'react';

import { Filter } from './Filter';
import Search from './Search';
import Sorter from './Sorter';

export const Menu = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isASC, setIsASC] = useState(false);
  return (
    <>
      <Search />

      <button onClick={() => setIsFilter(!isFilter)}>></button>
      <Sorter />

      {isFilter && <Filter />}
    </>
  );
};
