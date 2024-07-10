import React from 'react';
import { Box, Text } from "@chakra-ui/react";

export const Copyright = () => {
  return (
    <Box textAlign="center" py="4">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Tiga Saabani. All rights reserved.</Text>
    </Box>
  );
};
