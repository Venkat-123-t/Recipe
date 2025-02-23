import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaHome, FaPlus, FaHeart, FaStar, FaCog } from 'react-icons/fa';

const Navbar = ({ user, onLogout, hideLinks }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/auth');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link className="navbar-brand d-flex align-items-center text-white" to="/">
          <FaHome className="me-2" /> Recipe Sharing
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!hideLinks && (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn-black" to="/">
                    <FaHome className="me-2" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-black" to="/liked">
                    <FaHeart className="me-2" /> Liked
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn-black" to="/favorites">
                    <FaStar className="me-2" /> Favorites
                  </Link>
                </li>
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link btn-black" to="/add-recipe">
                        <FaPlus className="me-2" /> Add Recipe
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      {/* Dropdown Toggle Button */}
                      <a
                        className="nav-link dropdown-toggle btn-black"
                        role="button"
                        id="navbarDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaUser className="me-2" /> Profile
                      </a>
                      {/* Dropdown Menu */}
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/settings">
                            Settings
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                            style={{ cursor: 'pointer' }}
                          >
                            <FaSignOutAlt className="me-2" /> Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link btn-black" to="/auth">
                      <FaUser className="me-2" /> Login / Signup
                    </Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;