import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

function Profile() {
  const { currentUser, loginWithGoogle, loginWithEmail, logout } = useAuth();
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEmailLogin = async () => {
    setError('');
    setSuccess('');
    try {
      await loginWithEmail(email, password);
      setSuccess('Logged in successfully!');
    } catch (error) {
      setError('Failed to log in. Please check your email and password.');
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-avatar">
          {currentUser ? (
            <img src={currentUser.photoURL} alt="Profile" className="profile-pic" />
          ) : (
            <>
              <button onClick={loginWithGoogle} className="login-btn google">
                Login with Google
              </button>
              <button onClick={() => setShowEmailLogin(true)} className="login-btn email">
                Login with Email
              </button>
            </>
          )}
        </div>
        {showEmailLogin && !currentUser && (
          <div className="email-login">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="email-input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="password-input"
            />
            <button onClick={handleEmailLogin} className="login-btn email-submit">
              Submit
            </button>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
          </div>
        )}
        {currentUser && (
          <>
            <h2 className="profile-name">{currentUser.displayName}</h2>
            <p className="profile-email">{currentUser.email}</p>
            
            <div className="profile-actions">
              <button className="profile-action-btn">My Orders</button>
              <button className="profile-action-btn">Track Order</button>
              <button className="profile-action-btn">Support</button>
              <button onClick={logout} className="logout-btn">
              Logout
            </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
