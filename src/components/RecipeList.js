import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, setRecipes }) => {
  const toggleLike = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, liked: !recipe.liked } : recipe
      )
    );
  };

  const toggleFavorite = (id) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 text-bold">Recipes</h2>
      <div className="row">
        {recipes.length === 0 ? (
          <p className="text-center">No recipes found. Try adding one!</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className={`btn btn-sm ${recipe.liked ? 'btn-danger' : 'btn-outline-danger'}`}
                      onClick={() => toggleLike(recipe.id)}
                    >
                      {recipe.liked ? 'Liked' : 'Like'}
                    </button>
                    <button
                      className={`btn btn-sm ${recipe.favorite ? 'btn-warning' : 'btn-outline-warning'}`}
                      onClick={() => toggleFavorite(recipe.id)}
                    >
                      {recipe.favorite ? 'Favorited' : 'Favorite'}
                    </button>
                    <Link to={`/edit-recipe/${recipe.id}`} className="btn btn-primary btn-sm">
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;