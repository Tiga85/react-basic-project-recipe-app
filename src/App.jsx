import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("");

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };
  const handleDietFilterChange = (diet) => {
    setDietFilter(diet);
  };

  const filteredRecipes = data.hits
    .filter(
      (hit) =>
        hit.recipe.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hit.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    .filter((hit) => {
      if (!dietFilter) return true;
      return hit.recipe.healthLabels.includes(dietFilter);
    });

  return (
    <Box
      className="App"
      bg="blue.500"
      minH="100vh"
      minWidth={"100%"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {selectedRecipe ? (
        <RecipePage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
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
    </Box>
  );
};
