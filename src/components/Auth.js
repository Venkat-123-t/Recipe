import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login Logic
      if (!formData.username.trim()) {
        alert('Please enter a username.');
        return;
      }
      onLogin(formData.username);
      navigate('/');
    } else {
      // Signup Logic
      if (
        !formData.username.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.password.trim() ||
        formData.password !== formData.confirmPassword
      ) {
        alert('Please fill all fields and ensure passwords match.');
        return;
      }
      alert('Account created successfully!');
      setIsLogin(true); // Switch back to Login mode after signup
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm" style={{ width: '400px' }}>
        <div className="card-body text-center">
          <h2 className="text-bold text-light mb-4" style={{ fontWeight: 'bold' }}>
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light" style={{ fontWeight: 'bold' }}>
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email Field (Only for Signup) */}
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light" style={{ fontWeight: 'bold' }}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            )}

            {/* Phone Field (Only for Signup) */}
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-light" style={{ fontWeight: 'bold' }}>
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            )}

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light" style={{ fontWeight: 'bold' }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Field (Only for Signup) */}
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label text-light" style={{ fontWeight: 'bold' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          {/* Toggle Between Login and Signup */}
          <p className="mt-3 text-light" style={{ fontWeight: 'bold' }}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button
              className="btn btn-link text-green p-0 ms-2"
              onClick={() => setIsLogin(!isLogin)}
              style={{ fontWeight: 'bold', textDecoration: 'underline' }}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;