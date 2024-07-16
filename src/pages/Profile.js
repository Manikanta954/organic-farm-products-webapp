import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-avatar">
          <FontAwesomeIcon icon={faUser} size="4x" />
        </div>
        <h2 className="profile-name">Manikanta</h2>
      </div>
    </div>
  );
}

export default Profile;
