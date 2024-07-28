import React, { useContext, useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log('Google Sign In Success:', result);
      })
      .catch((error) => {
        console.error('Google Sign In Error:', error);
      });
  }

  function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log('Email Sign In Success:', result);
      })
      .catch((error) => {
        console.error('Email Sign In Error:', error);
        throw error;  // Re-throw the error to be caught in the component
      });
  }

  function logout() {
    return signOut(auth)
      .then(() => {
        console.log('Sign Out Success');
      })
      .catch((error) => {
        console.error('Sign Out Error:', error);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log('Auth State Changed:', user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loginWithGoogle,
    loginWithEmail,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
