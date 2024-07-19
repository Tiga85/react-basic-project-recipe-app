import {
  Center,
  Heading,
  Flex,
  Box,
  Grid,
  GridItem,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchFilter } from "../components/ui/SearchFilter";
import { DietFilter } from "../components/ui/DietFilter";
import { VeganChoice } from "../components/ui/VeganChoice";
import { Time } from "../components/ui/Time";
import { Copyright } from "../components/footer/Copyright";

export const RecipeListPage = ({ recipes, onRecipeSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("");

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
        hit.recipe.healthLabels.some(
          (label) => label.toLowerCase() === dietFilter.toLowerCase()
        ));

    return matchesSearchQuery && matchesDietFilter;
  });

  return (
    <VStack spacing={8}>
      <Time align="start" />
      <Center>
        <Heading
          backgroundColor={"blue.100"}
          color="darkblue"
          borderRadius="5px"
          py="10px"
          textAlign="center"
          mb="10px"
          mt="10px"
          border="1px solid white"
        >
          Project: Recipe App
        </Heading>
      </Center>
      <Flex width="80%" justify="center">
        <SearchFilter
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
        <DietFilter
          dietFilter={dietFilter}
          onDietFilterChange={handleDietFilterChange}
        />
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {filteredRecipes.map((hit) => (
          <GridItem
            key={hit.recipe.label}
            onClick={() => onRecipeSelect(hit.recipe)}
            bg="gray.100"
            boxShadow="md"
            borderRadius="md"
            p={5}
            _hover={{
              backgroundColor: "blue.500",
              transform: "scale(1.1)",
              transition: "all 0.2s",
              boxShadow: "xl",
              borderColor: "blue.500",
              cursor: "pointer",
            }}
          >
            <Image
              src={hit.recipe.image}
              alt={hit.recipe.label}
              borderRadius="md"
              objectFit="cover"
              h="200px"
              w="100%"
              maxW="400px"
              m="auto"
            />
            <Text fontWeight="bold" fontSize="lg" mt={2}>
              {hit.recipe.label}
            </Text>
            <VStack align="start" spacing={2} mt={2}>
              <Text>
                <strong>Meal Type:</strong>{" "}
                {hit.recipe.mealType && hit.recipe.mealType.length > 0
                  ? hit.recipe.mealType
                      .map((type) => type.toUpperCase())
                      .join(", ")
                  : "N/A"}
              </Text>
              <Text>
                <strong>Diet Label:</strong>{" "}
                {hit.recipe.dietLabels && hit.recipe.dietLabels.length > 0
                  ? hit.recipe.dietLabels.join(", ")
                  : "N/A"}
              </Text>
              <Text
                borderRadius="lg"
                backgroundColor={"red.500"}
                color={"white"}
              >
                <strong>Cautions:</strong>{" "}
                {hit.recipe.cautions && hit.recipe.cautions.length > 0
                  ? hit.recipe.cautions.join(", ")
                  : "None"}
              </Text>
              <Text>
                <strong>Dish Type:</strong>{" "}
                {hit.recipe.dishType && hit.recipe.dishType.length > 0
                  ? hit.recipe.dishType.join(", ")
                  : "N/A"}
              </Text>
              <VeganChoice healthLabels={hit.recipe.healthLabels || []} />
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </VStack>
  );
};
