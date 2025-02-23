import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Settings = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    newPassword: '',
    profilePicture: null,
    notificationEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, profilePicture: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving settings
    toast.success('Settings updated successfully!');
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 text-bold text-light">Settings</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Change Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">
                Change Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your new email"
              />
            </div>

            {/* Change Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your current password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label text-light">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
              />
            </div>

            {/* Upload Profile Picture */}
            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label text-light">
                Upload Profile Picture
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePicture"
                name="profilePicture"
                onChange={handleChange}
              />
            </div>

            {/* Notification Preferences */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="notificationEnabled"
                name="notificationEnabled"
                checked={formData.notificationEnabled}
                onChange={handleChange}
              />
              <label htmlFor="notificationEnabled" className="form-check-label text-light">
                Enable Notifications
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;