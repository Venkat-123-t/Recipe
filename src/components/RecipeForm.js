import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const RecipeForm = ({ recipes, setRecipes }) => {
  const { id } = useParams(); // Get recipe ID for editing
  const navigate = useNavigate();
  const isEditMode = !!id;

  const initialRecipe = isEditMode
    ? recipes.find((recipe) => recipe.id === id)
    : { title: '', ingredients: '', instructions: '', image: '' };

  const [formData, setFormData] = useState(initialRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.ingredients || !formData.instructions || !formData.image) {
      toast.error('Please fill in all fields and upload an image.');
      return;
    }

    if (isEditMode) {
      setRecipes(recipes.map((recipe) => (recipe.id === id ? formData : recipe)));
      toast.success('Recipe updated successfully!');
    } else {
      const newRecipe = { ...formData, id: uuidv4() };
      setRecipes([...recipes, newRecipe]);
      toast.success('Recipe added successfully!');
    }

    navigate('/');
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <h2 className="text-center mb-4 text-bold text-light">{isEditMode ? 'Edit Recipe' : 'Add Recipe'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-light">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter recipe title"
              style={{ fontWeight: 'bold' }} // Make text bold
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label text-light">
              Ingredients
            </label>
            <textarea
              className="form-control"
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="3"
              placeholder="Enter ingredients"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="instructions" className="form-label text-light">
              Instructions
            </label>
            <textarea
              className="form-control"
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="5"
              placeholder="Enter instructions"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label text-light">
              Upload Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isEditMode ? 'Update Recipe' : 'Add Recipe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;