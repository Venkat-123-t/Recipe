import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <p>User not logged in.</p>;
  }

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4 text-bold text-light">Profile</h2>
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <p><strong>Name:</strong> <span className="text-light">{user.name}</span></p>
          <p><strong>Email:</strong> <span className="text-light">{user.email}</span></p>
          <p><strong>Phone:</strong> <span className="text-light">{user.phone}</span></p>
          <button className="btn btn-primary mt-3">Upload Profile Picture</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;