import {
  Center,
  Heading,
  Box,
  Button,
  VStack,
  Text,
  Image,
  Link,
  UnorderedList,
  ListItem,
  Container,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Copyright } from "../components/footer/Copyright";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Container maxW="container.xl">
      <VStack
        align="center"
        p={5}
        spacing={5}
        textAlign="center"
        borderWidth="1px"
        height={"100%"}
        color="darkblue"
        backgroundColor={"gray.100"}
        borderColor="gray.200"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
      >
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
            {recipe.label}
          </Heading>
        </Center>
        <VStack boxSize={["100%", "sm"]} width={["100%", "400px"]}>
          <Button
            onClick={onBack}
            colorScheme="blue"
            p={3}
            fontSize="lg"
            fontWeight="bold"
            width="100%"
          >
            <ArrowBackIcon /> Back to Recipe List
          </Button>
          <Image
            src={recipe.image}
            borderRadius="lg"
            alt={recipe.label}
            boxSize={["100%", "400px"]}
            objectFit="cover"
          />
        </VStack>
        <VStack align="start" spacing={3}>
          <Text>
            <strong>Meal Type:</strong>{" "}
            {recipe.mealType && recipe.mealType.length > 0
              ? recipe.mealType.join(", ")
              : "N/A"}
          </Text>
          <Text>
            <strong>Dish Type:</strong>{" "}
            {recipe.dishType && recipe.dishType.length > 0
              ? recipe.dishType.join(", ")
              : "N/A"}
          </Text>
          <Text>
            <strong>Total Cooking Time:</strong>{" "}
            {recipe.totalTime ? `${recipe.totalTime} minutes` : "N/A"}
          </Text>
          <Text>
            <strong>Servings:</strong> {recipe.yield || "N/A"}
          </Text>
          <Text>
            <strong>Diet Label:</strong>{" "}
            {recipe.dietLabels && recipe.dietLabels.length > 0
              ? recipe.dietLabels.join(", ")
              : "N/A"}
          </Text>
          <Text
            textAlign={"left"}
            borderRadius="lg"
            backgroundColor={"green.500"}
            color={"white"}
          >
            <strong>Health Labels:</strong>{" "}
            {recipe.healthLabels && recipe.healthLabels.length > 0
              ? recipe.healthLabels.join(", ")
              : "N/A"}
          </Text>
          <Text borderRadius="lg" backgroundColor={"red.500"} color={"white"}>
            <strong>Cautions:</strong>{" "}
            {recipe.cautions && recipe.cautions.length > 0
              ? recipe.cautions.join(", ")
              : "None"}
          </Text>
          <Text textAlign={"left"}>
            <strong>Ingredients:</strong>{" "}
            {recipe.ingredientLines && recipe.ingredientLines.length > 0
              ? recipe.ingredientLines.join(", ")
              : "N/A"}
          </Text>
          <Text>
            <strong>Total Nutrients:</strong>
          </Text>
          <UnorderedList textAlign={"left"}>
            <ListItem>
              <strong>Energy:</strong>{" "}
              {recipe.totalNutrients.ENERC_KCAL
                ? `${recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ${
                    recipe.totalNutrients.ENERC_KCAL.unit
                  }`
                : "N/A"}
            </ListItem>
            <ListItem>
              <strong>Protein:</strong>{" "}
              {recipe.totalNutrients.PROCNT
                ? `${recipe.totalNutrients.PROCNT.quantity.toFixed(2)} ${
                    recipe.totalNutrients.PROCNT.unit
                  }`
                : "N/A"}
            </ListItem>
            <ListItem>
              <strong>Fat:</strong>{" "}
              {recipe.totalNutrients.FAT
                ? `${recipe.totalNutrients.FAT.quantity.toFixed(2)} ${
                    recipe.totalNutrients.FAT.unit
                  }`
                : "N/A"}
            </ListItem>
            <ListItem>
              <strong>Carbs:</strong>{" "}
              {recipe.totalNutrients.CHOCDF
                ? `${recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} ${
                    recipe.totalNutrients.CHOCDF.unit
                  }`
                : "N/A"}
            </ListItem>
            <ListItem>
              <strong>Cholesterol:</strong>{" "}
              {recipe.totalNutrients.CHOLE
                ? `${recipe.totalNutrients.CHOLE.quantity.toFixed(2)} ${
                    recipe.totalNutrients.CHOLE.unit
                  }`
                : "N/A"}
            </ListItem>
            <ListItem>
              <strong>Sodium:</strong>{" "}
              {recipe.totalNutrients.NA
                ? `${recipe.totalNutrients.NA.quantity.toFixed(2)} ${
                    recipe.totalNutrients.NA.unit
                  }`
                : "N/A"}
            </ListItem>
          </UnorderedList>
          <Text>
            <Link href={recipe.url}>View Full Recipe</Link>
          </Text>
        </VStack>
        <Box>
          <Copyright />
        </Box>
      </VStack>
    </Container>
  );
};
