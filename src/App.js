import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './styles.css'; // Local styles
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import UserProfile from './components/UserProfile';
import SplashScreen from './components/SplashScreen';
import Settings from './components/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      ingredients: 'Spaghetti, Eggs, Parmesan Cheese, Pancetta, Black Pepper',
      instructions: 'Cook spaghetti, mix with eggs, cheese, and pancetta. Season with pepper.',
      image: 'https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg',
      liked: false,
      favorite: false,
    },
    {
      id: '2',
      title: 'Caesar Salad',
      ingredients: 'Romaine Lettuce, Caesar Dressing, Croutons, Parmesan Cheese',
      instructions: 'Toss lettuce with dressing, top with croutons and cheese.',
      image: 'https://www.allrecipes.com/thmb/JTW0AIVY5PFxqLrf_-CDzT4OZQY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg',
      liked: false,
      favorite: false,
    },
    {
      id: '3',
      title: 'Chocolate Brownie',
      ingredients: 'Butter, Sugar, Cocoa Powder, Eggs, Flour',
      instructions: 'Mix ingredients, bake at 350°F for 25 minutes.',
      image: 'https://recipesblob.oetker.in/assets/9a89b75f976642dcab8ae407e2f4344e/1272x764/chocolate-brownie.webp',
      liked: false,
      favorite: false,
    },
  ]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Splash screen lasts for 3 seconds
  }, []);

  const handleLogin = (username) => {
    setUser({ name: username, email: `${username}@example.com`, phone: '1234567890' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="container">
        {/* Conditional Navbar */}
        {!loading && <NavbarWrapper user={user} onLogout={handleLogout} />}

        {/* Conditional Rendering for Splash Screen */}
        {loading ? (
          <SplashScreen />
        ) : (
          <Routes>
            {/* Redirect to Login if no user is logged in */}
            {!user && <Route path="*" element={<Navigate to="/auth" />} />}

            {/* Home Page */}
            <Route path="/" element={<RecipeList recipes={recipes} setRecipes={setRecipes} />} />

            {/* Liked Recipes */}
            <Route
              path="/liked"
              element={<RecipeList recipes={recipes.filter((recipe) => recipe.liked)} setRecipes={setRecipes} />}
            />

            {/* Favorite Recipes */}
            <Route
              path="/favorites"
              element={<RecipeList recipes={recipes.filter((recipe) => recipe.favorite)} setRecipes={setRecipes} />}
            />

            {/* Authentication (Login/Signup) */}
            <Route path="/auth" element={<Auth onLogin={handleLogin} />} />

            {/* Add Recipe */}
            <Route path="/add-recipe" element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />} />

            {/* Edit Recipe */}
            <Route path="/edit-recipe/:id" element={<RecipeForm recipes={recipes} setRecipes={setRecipes} />} />

            {/* Recipe Details */}
            <Route path="/recipe/:id" element={<RecipeDetails recipes={recipes} />} />

            {/* User Profile */}
            <Route path="/profile" element={<UserProfile user={user} />} />

            {/* Settings */}
            <Route path="/settings" element={<Settings />} />
          </Routes>
        )}

        {/* Toast Notifications */}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
}

// Wrapper Component for Navbar
const NavbarWrapper = ({ user, onLogout }) => {
  const location = useLocation();
  const hideLinks = location.pathname === '/auth'; // Hide links on the login/signup page

  return <Navbar user={user} onLogout={onLogout} hideLinks={hideLinks} />;
};

export default App;