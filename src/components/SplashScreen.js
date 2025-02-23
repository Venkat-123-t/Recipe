import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth'); // Redirect to login/signup after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-3 text-white animated-text">Flavors Unleashed,</h1>
        <h1 className="display-3 text-white animated-text mb-4">Recipes Shared!</h1>
        <p className="lead text-white">Discover, Share, and Cook Delicious Recipes</p>
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-lg">Get Started</button>
          <button className="btn btn-outline-light btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;