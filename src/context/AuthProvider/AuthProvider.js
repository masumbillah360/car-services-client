import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(user);

  const loginGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const singnInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    console.log(profile);
    return updateProfile(auth.currentUser,  profile );
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loginGoogle,
    logOutUser,
    singnInUser,
    updateUser,
    loginEmailPass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
