
import './DietFilter.css';
import React from 'react';
import { Select } from '@chakra-ui/react';

export const DietFilter = ({ dietFilter, onDietFilterChange }) => {
  const handleDietChange = (e) => {
    onDietFilterChange(e.target.value);
  };

  return (
    <select 
      value={dietFilter} 
      onChange={handleDietChange} 
      className="diet-select"
      style={{ marginLeft: '10px', padding: '10px', width: '30%' }}
    >
      <option value="">All Diets</option>
      <option value="Vegan">Vegan</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Pescetarian">Pescetarian</option>
    </select>
  );
};