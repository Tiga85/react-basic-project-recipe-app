import { Box, Text } from "@chakra-ui/react";

export const Copyright = () => {
  return (
    <Box
      backgroundColor={"blue.100"}
      color="darkblue"
      borderRadius="5px"
      fontSize="sm"
      textAlign="center"
      mb="10px"
    >
      <Text>
        &copy; {new Date().getFullYear()} Tiga Saabani. All rights reserved.
      </Text>
    </Box>
  );
};
