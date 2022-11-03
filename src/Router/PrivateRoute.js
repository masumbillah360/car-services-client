import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (user?.uid) {
    return children;
  } else {
    window.alert("You are not logged In yet Please login");
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
