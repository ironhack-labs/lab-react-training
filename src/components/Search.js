import React from 'react';
import { useState } from 'react';

export const Search = ({ searchFilter }) => {
  const [str, setStr] = useState('');

  const handleSearch = (e) => {
    setStr(e.target.value);
    searchFilter(e.target.value);
  };

  return (
    <div>
      <label for="search">search by name</label>
      <input type="text" value={str} onChange={handleSearch} />
    </div>
  );
};
