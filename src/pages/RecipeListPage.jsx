import "./RecipeListPage.css";
import { Center, Heading, Flex  } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState, useEffect } from "react";
import { SearchFilter } from "../components/ui/SearchFilter";
import { DietFilter } from "../components/ui/DietFilter";
import {VeganChoice}  from '../components/ui/VeganChoice';
import { Time } from "../components/ui/Time";

export const RecipeListPage = ({ recipes, onRecipeSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('');

  const handleSearchQueryChange = (value) => {
    setSearchQuery(value);
  };

  const handleDietFilterChange = (value) => {
    setDietFilter(value);
  };

  const lowerCaseSearchQuery = searchQuery.toLowerCase();

  const filteredRecipes = recipes.filter((hit) => {
    const matchesSearchQuery =
      hit.recipe.label.toLowerCase().includes(lowerCaseSearchQuery) ||
      (hit.recipe.healthLabels &&
        hit.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(lowerCaseSearchQuery)
        ));
    
    const matchesDietFilter =
      !dietFilter || 
      (hit.recipe.healthLabels && 
       hit.recipe.healthLabels.some((label) => label.toLowerCase() === dietFilter.toLowerCase()));

    return matchesSearchQuery && matchesDietFilter;
  });

  return (
    <div>
      <Time/>
      <Center>
        <Heading>Project: Recipe App</Heading>

      </Center>

      <Center>
        <SearchFilter
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
        <DietFilter
          dietFilter={dietFilter}
          onDietFilterChange={handleDietFilterChange}
        />
      </Center>
      <div className="recipe-list-container">
        {filteredRecipes.map((hit) => (
          <div
            key={hit.recipe.label}
            className="recipe-item"
            onClick={() => onRecipeSelect(hit.recipe)}
          >
            <img
              className="recipe-image"
              src={hit.recipe.image}
              alt={hit.recipe.label}
            />
            <p>
              <strong>Meal Type:</strong>{' '}
              {hit.recipe.mealType && hit.recipe.mealType.length > 0
                ? hit.recipe.mealType.map((type) => type.toUpperCase()).join(', ')
                : 'N/A'}
            </p>
            <div className="recipe-label">{hit.recipe.label}</div>
            <div className="recipe-details">
              <p>
                <strong>Diet Label:</strong>{' '}
                {hit.recipe.dietLabels && hit.recipe.dietLabels.length > 0
                  ? hit.recipe.dietLabels.join(', ')
                  : 'N/A'}
              </p>
              <p>
                <strong>Cautions:</strong>{' '}
                {hit.recipe.cautions && hit.recipe.cautions.length > 0
                  ? hit.recipe.cautions.join(', ')
                  : 'None'}
              </p>
              <p>
                <strong>Dish Type:</strong>{' '}
                {hit.recipe.dishType && hit.recipe.dishType.length > 0
                  ? hit.recipe.dishType.join(', ')
                  : 'N/A'}
              </p>
              <VeganChoice healthLabels={hit.recipe.healthLabels || []} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};