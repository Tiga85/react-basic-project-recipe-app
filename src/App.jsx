import { data } from './utils/data';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState, useEffect } from 'react';

export const App = () => {


  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [dietFilter, setDietFilter] = useState('');

  // Your state code here
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };
  const handleDietFilterChange = (diet) => {
    setDietFilter(diet);
  };

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hit.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  ).filter((hit) => {
    if (!dietFilter) return true; // If no diet filter is selected, include all recipes
    return hit.recipe.healthLabels.includes(dietFilter); // Otherwise, only include recipes that match the diet filter
  });
  
  return (
    <div>
      {selectedRecipe ? (
       <RecipePage recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <RecipeListPage
          recipes={filteredRecipes}
          onRecipeSelect={setSelectedRecipe}
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          dietFilter={dietFilter}
          onDietFilterChange={handleDietFilterChange}
        />
      )}
    </div>
  );
};