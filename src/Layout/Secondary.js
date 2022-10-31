import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";

const Secondary = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Secondary;
