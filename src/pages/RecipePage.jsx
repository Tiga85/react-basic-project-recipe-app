import { Center, Heading } from '@chakra-ui/react';
import { data } from '../utils/data';
import { useState, useEffect } from 'react';
import { RecipeListPage } from './RecipeListPage';
import './RecipePage.css';
import { ArrowBackIcon } from '@chakra-ui/icons'

 export const RecipePage = ({ recipe, onBack }) => {
  return (
    <div className="recipe-container">
      <Center>
        <Heading>{recipe.label}</Heading>
      </Center>
      <button className="recipe-back-button" onClick={onBack}><ArrowBackIcon /> Back to Recipe List </button>
      <img className="recipe-image" src={recipe.image} alt={recipe.label} />
      <div className="recipe-details">
        <p><strong>Meal Type:</strong> {recipe.mealType && recipe.mealType.length > 0 ? recipe.mealType.join(', ') : 'N/A'}</p>
        <p><strong>Dish Type:</strong> {recipe.dishType && recipe.dishType.length > 0 ? recipe.dishType.join(', ') : 'N/A'}</p>
        <p><strong>Total Cooking Time:</strong> {recipe.totalTime ? `${recipe.totalTime} minutes` : 'N/A'}</p>
        <p><strong>Servings:</strong> {recipe.yield || 'N/A'}</p>
        <p><strong>Diet Label:</strong> {recipe.dietLabels && recipe.dietLabels.length > 0 ? recipe.dietLabels.join(', ') : 'N/A'}</p>
        <p><strong>Health Labels:</strong> {recipe.healthLabels && recipe.healthLabels.length > 0 ? recipe.healthLabels.join(', ') : 'N/A'}</p>
        <p><strong>Cautions:</strong> {recipe.cautions && recipe.cautions.length > 0 ? recipe.cautions.join(', ') : 'None'}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredientLines && recipe.ingredientLines.length > 0 ? recipe.ingredientLines.join(', ') : 'N/A'}</p>
<p><strong>Total Nutrients:</strong></p>
        <ul>
          <li><strong>Energy:</strong> {recipe.totalNutrients.ENERC_KCAL ? `${recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ${recipe.totalNutrients.ENERC_KCAL.unit}` : 'N/A'}</li>
          <li><strong>Protein:</strong> {recipe.totalNutrients.PROCNT ? `${recipe.totalNutrients.PROCNT.quantity.toFixed(2)} ${recipe.totalNutrients.PROCNT.unit}` : 'N/A'}</li>
          <li><strong>Fat:</strong> {recipe.totalNutrients.FAT ? `${recipe.totalNutrients.FAT.quantity.toFixed(2)} ${recipe.totalNutrients.FAT.unit}` : 'N/A'}</li>
          <li><strong>Carbs:</strong> {recipe.totalNutrients.CHOCDF ? `${recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} ${recipe.totalNutrients.CHOCDF.unit}` : 'N/A'}</li>
          <li><strong>Cholesterol:</strong> {recipe.totalNutrients.CHOLE ? `${recipe.totalNutrients.CHOLE.quantity.toFixed(2)} ${recipe.totalNutrients.CHOLE.unit}` : 'N/A'}</li>
          <li><strong>Sodium:</strong> {recipe.totalNutrients.NA ? `${recipe.totalNutrients.NA.quantity.toFixed(2)} ${recipe.totalNutrients.NA.unit}` : 'N/A'}</li>
        </ul>
        <p><a href={recipe.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a></p>
      </div>
    </div>
  );
};


