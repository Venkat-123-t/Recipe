import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 text-bold">{recipe.title}</h2>
      <div className="card shadow-sm">
        <img src={recipe.image} alt={recipe.title} className="recipe-image-full" />
        <div className="card-body">
          <h5 className="card-title">Ingredients</h5>
          <p className="card-text">{recipe.ingredients}</p>
          <h5 className="card-title">Instructions</h5>
          <p className="card-text">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;