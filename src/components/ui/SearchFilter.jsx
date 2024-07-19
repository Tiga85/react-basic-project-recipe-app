import { Input, Box } from "@chakra-ui/react";

export const SearchFilter = ({ searchQuery, onSearchQueryChange }) => {
  const handleSearchChange = (event) => {
    onSearchQueryChange(event.target.value);
  };

  return (
    <Box w="50%" mr="1rem">
      <Input
        backgroundColor="blue.100"
        borderRadius="10px"
        variant="flushed"
        size="lg"
        placeholder="Search repice by name or health labels..."
        sx={{
          "::placeholder": {
            color: "blue.500",
            fontWeight: "400",
          },
        }}
        value={searchQuery}
        border="1px solid darkblue"
        onChange={handleSearchChange}
      />
    </Box>
  );
};
