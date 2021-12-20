import React from 'react';
import './style.scss';

const Profile = () => {
  // onClick

  const handleLogout = () => {
    localStorage.clear();
    location.replace('/');
  };

  return (
    <div className="profile">
      <button
        onClick={handleLogout}
        className="button is-danger is-large"
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
