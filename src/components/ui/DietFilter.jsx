import { Select, Box } from "@chakra-ui/react";

export const DietFilter = ({ dietFilter, onDietFilterChange }) => {
  const handleDietChange = (event) => {
    onDietFilterChange(event.target.value);
  };

  return (
    <Box w="20%">
      <Select
        color="darkblue"
        fontWeight="bold"
        backgroundColor="white"
        border="1px solid darkblue"
        borderRadius="10px"
        size="lg"
        variant="flushed"
        value={dietFilter}
        onChange={handleDietChange}
      >
        <option value="">All Diets</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescetarian">Pescetarian</option>
      </Select>
    </Box>
  );
};
