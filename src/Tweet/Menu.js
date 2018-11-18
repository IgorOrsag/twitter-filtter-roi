import React from 'react';
import { useState } from 'react';

import { Filter } from './Filter';
import Search from './Search';

export const Menu = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <>
      <Search />

      <button onClick={() => setIsFilter(!isFilter)}>></button>
      {isFilter && <Filter />}
    </>
  );
};
