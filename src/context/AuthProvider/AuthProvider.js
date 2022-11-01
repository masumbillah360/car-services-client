import { getAuth, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

export const AuthContext = createContext();
const loginUser = (provider) => {
  return signInWithPopup(auth, provider);
};
const user = { name: "Masum" };
const authInfo = { user, loginUser };
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
