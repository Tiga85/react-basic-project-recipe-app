import './SearchFilter.css';
import React from 'react';
import { Center } from '@chakra-ui/react';

export const SearchFilter = ({ searchQuery, onSearchQueryChange }) => {
  const handleSearchChange = (e) => {
    onSearchQueryChange(e.target.value);
  };

  return (
   
      <input
        type="text"
        placeholder="Search recipes by name or health label..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
        
      />
 
  );
};
