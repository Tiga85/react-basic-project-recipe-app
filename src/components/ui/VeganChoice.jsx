import { Text } from "@chakra-ui/react";

export const VeganChoice = ({ healthLabels }) => {
  const veganLabels = healthLabels.filter(
    (label) =>
      label.toLowerCase() === "vegan" || label.toLowerCase() === "vegetarian"
  );

  return (
    <Text borderRadius="lg" backgroundColor={"green.500"} color={"white"}>
      <strong>Health Choice:</strong>{" "}
      {veganLabels.length > 0 ? veganLabels.join(", ") : "N/A"}
    </Text>
  );
};
